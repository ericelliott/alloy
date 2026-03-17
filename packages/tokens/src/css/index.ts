/**
 * CSS custom properties injection for Alloy tokens.
 *
 * Import this module to inject all design tokens as CSS custom properties
 * onto the document root:
 *
 * ```typescript
 * import '@paralleldrive/alloy-tokens/css'
 * ```
 */
import { color } from '../color.js';
import { motion } from '../motion.js';
import { spacing } from '../spacing.js';
import { typography } from '../typography.js';

/**
 * Converts a nested object of token values into CSS custom property declarations.
 */
function flattenToCSSVars(obj: Record<string, unknown>, prefix: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(obj)) {
    const varName = `${prefix}-${key}`;
    if (typeof value === 'object' && value !== null) {
      Object.assign(result, flattenToCSSVars(value as Record<string, unknown>, varName));
    } else {
      result[varName] = String(value);
    }
  }
  return result;
}

/**
 * Injects all Alloy tokens as CSS custom properties on :root.
 * Safe to call multiple times (idempotent via style element ID).
 */
export function injectTokens(): void {
  if (typeof document === 'undefined') return;

  const styleId = 'alloy-tokens';
  if (document.getElementById(styleId)) return;

  const vars: Record<string, string> = {
    ...flattenToCSSVars(color as unknown as Record<string, unknown>, '--alloy-color'),
    ...flattenToCSSVars(motion as unknown as Record<string, unknown>, '--alloy-motion'),
    ...flattenToCSSVars(spacing as unknown as Record<string, unknown>, '--alloy-spacing'),
    ...flattenToCSSVars(typography as unknown as Record<string, unknown>, '--alloy-typography'),
  };

  const declarations = Object.entries(vars)
    .map(([name, value]) => `  ${name}: ${value};`)
    .join('\n');

  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = `:root {\n${declarations}\n}\n`;
  document.head.appendChild(style);
}

// Auto-inject on import
injectTokens();
