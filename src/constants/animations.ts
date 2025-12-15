/**
 * Animation Variants
 * Reusable motion animation configurations for consistent UX
 */

export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const FADE_IN_DOWN = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const FADE_IN = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  viewport: { once: true },
};

export const SCALE_IN = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  viewport: { once: true },
};

export const SLIDE_IN_LEFT = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  viewport: { once: true },
};

export const SLIDE_IN_RIGHT = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  viewport: { once: true },
};
