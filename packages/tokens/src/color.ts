/**
 * Color tokens for the Alloy Design System.
 *
 * Dark-first material palette inspired by luxury automotive design:
 * onyx, titanium, and tempered glass.
 */
export const color = {
  // Surfaces
  surface: {
    base: '#0a0a0a',
    raised: '#111111',
    overlay: '#1a1a1a',
    inset: '#050505',
    sunken: '#000000',
  },

  // Borders & dividers
  border: {
    subtle: 'rgba(255, 255, 255, 0.06)',
    default: 'rgba(255, 255, 255, 0.10)',
    strong: 'rgba(255, 255, 255, 0.18)',
  },

  // Text
  text: {
    primary: '#f0f0f0',
    secondary: '#a0a0a0',
    muted: '#606060',
    inverse: '#0a0a0a',
  },

  // Accent
  accent: {
    primary: '#c8a96e',
    secondary: '#8a7a6a',
    highlight: '#e8c98e',
  },

  // Semantic
  semantic: {
    success: '#3a7a5a',
    warning: '#8a6a2a',
    error: '#7a2a2a',
    info: '#2a4a7a',
  },
} as const;

export type Color = typeof color;
