import { color, motion } from '@paralleldrive/alloy-tokens';
import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

/**
 * The physical depth level of the surface.
 *
 * - `sunken`  — recessed into the base plane
 * - `base`    — at the ground level
 * - `raised`  — elevated above base (default card/panel)
 * - `overlay` — floating layer (modal, popover)
 * - `inset`   — pressed inward (input, well)
 */
export type SurfaceDepth = 'sunken' | 'base' | 'raised' | 'overlay' | 'inset';

export interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  /** Physical depth level expressed as shadow and background */
  depth?: SurfaceDepth;
  /** Content rendered inside the surface */
  children?: ReactNode;
}

const depthStyles: Record<SurfaceDepth, CSSProperties> = {
  sunken: {
    backgroundColor: color.surface.sunken,
    boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.6), inset 0 1px 3px rgba(0,0,0,0.8)',
  },
  base: {
    backgroundColor: color.surface.base,
    boxShadow: 'none',
  },
  raised: {
    backgroundColor: color.surface.raised,
    boxShadow:
      '0 1px 2px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.06)',
  },
  overlay: {
    backgroundColor: color.surface.overlay,
    boxShadow:
      '0 4px 16px rgba(0,0,0,0.5), 0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.10)',
  },
  inset: {
    backgroundColor: color.surface.inset,
    boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(0,0,0,0.4)',
  },
};

/**
 * Surface is the foundational layout primitive of the Alloy Design System.
 *
 * Every element in Alloy exists on a physical plane. Surface expresses that
 * plane through depth, shadow, and material color — not flat color blocks.
 *
 * @example
 * ```tsx
 * <Surface depth="raised">
 *   <p>Content lives here</p>
 * </Surface>
 * ```
 */
export function Surface({ depth = 'base', children, style, ...props }: SurfaceProps) {
  const baseStyle: CSSProperties = {
    borderRadius: '8px',
    transition: `box-shadow ${motion.transition.normal}, background-color ${motion.transition.normal}`,
    ...depthStyles[depth],
    ...style,
  };

  return (
    <div style={baseStyle} {...props}>
      {children}
    </div>
  );
}
