/**
 * Motion tokens for the Alloy Design System.
 *
 * "Motion has weight" — transitions feel physical.
 * Nothing snaps or jumps. Everything has inertia.
 */
export const motion = {
  // Durations (ms)
  duration: {
    instant: 0,
    fast: 100,
    normal: 200,
    slow: 350,
    deliberate: 500,
  },

  // Easing functions
  easing: {
    standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },

  // Transition shorthands
  transition: {
    fast: '100ms cubic-bezier(0.4, 0.0, 0.2, 1)',
    normal: '200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
    slow: '350ms cubic-bezier(0.4, 0.0, 0.2, 1)',
  },
} as const;

export type Motion = typeof motion;
