import { describe, expect, it } from 'vitest';
import { color, motion, spacing, typography } from '../index.js';

describe('color tokens', () => {
  it('exports a surface color palette', () => {
    expect(color.surface.base).toBeDefined();
    expect(color.surface.raised).toBeDefined();
    expect(color.surface.overlay).toBeDefined();
    expect(color.surface.inset).toBeDefined();
    expect(color.surface.sunken).toBeDefined();
  });

  it('exports text colors', () => {
    expect(color.text.primary).toBeDefined();
    expect(color.text.secondary).toBeDefined();
  });

  it('exports accent colors', () => {
    expect(color.accent.primary).toBeDefined();
  });
});

describe('motion tokens', () => {
  it('exports duration values as numbers', () => {
    expect(typeof motion.duration.fast).toBe('number');
    expect(typeof motion.duration.normal).toBe('number');
    expect(motion.duration.fast).toBeLessThan(motion.duration.normal);
  });

  it('exports easing functions as strings', () => {
    expect(typeof motion.easing.standard).toBe('string');
    expect(motion.easing.standard).toContain('cubic-bezier');
  });

  it('exports transition shorthands', () => {
    expect(motion.transition.normal).toBeDefined();
    expect(motion.transition.normal).toContain('ms');
  });
});

describe('spacing tokens', () => {
  it('exports spacing values as px strings', () => {
    expect(spacing[0]).toBe('0px');
    expect(spacing[4]).toBe('16px');
    expect(spacing[8]).toBe('32px');
  });

  it('values increase with key', () => {
    const px = (v: string) => Number.parseInt(v, 10);
    expect(px(spacing[2])).toBeLessThan(px(spacing[4]));
    expect(px(spacing[4])).toBeLessThan(px(spacing[8]));
  });
});

describe('typography tokens', () => {
  it('exports font families', () => {
    expect(typography.fontFamily.sans).toBeDefined();
    expect(typography.fontFamily.mono).toBeDefined();
  });

  it('exports font sizes as rem strings', () => {
    expect(typography.fontSize.base).toBe('1rem');
    expect(typography.fontSize.sm).toContain('rem');
  });

  it('exports font weights as numbers', () => {
    expect(typeof typography.fontWeight.regular).toBe('number');
    expect(typography.fontWeight.regular).toBe(400);
  });
});
