import React from 'react';

import { range, generateId } from './utils';
import useIncrementingNumber from './useIncrementingNumber';

const rainbowColors = [
  'hsl(182deg, 82%, 52%)', // red
  'hsl(256deg, 63%, 51%)', // orange
  'hsl(0deg, 61%, 55%)', // yellow
  'hsl(36deg, 100%, 62%)', // yellow
 
];
const paletteSize = rainbowColors.length;
const WINDOW_SIZE = 3;

// During compile-time build, we have to assume no browser support.
// On mount, we'll check if `CSS.registerProperty` exists
const hasBrowserSupport =
  typeof window !== 'undefined'
    ? typeof window.CSS.registerProperty === 'function'
    : false;

const getColorPropName = (id, index) => `--magic-rainbow-color-${id}-${index}`;

const useRainbow = ({ intervalDelay = 4000 }) => {
  const prefersReducedMotion =
    typeof window === 'undefined'
      ? true
      : window.matchMedia('(prefers-reduced-motion: no-preference)');

  const isEnabled = hasBrowserSupport && prefersReducedMotion.matches;

  const { current: uniqueId } = React.useRef(generateId());

  // Register all custom properties
  React.useEffect(() => {
    if (!isEnabled) {
      return;
    }

    range(0, WINDOW_SIZE).map(index => {
      const name = getColorPropName(uniqueId, index);
      const initialValue = rainbowColors[index];

      CSS.registerProperty({
        name,
        initialValue,
        syntax: '<color>',
        inherits: false,
      });
    });
  }, [WINDOW_SIZE, isEnabled]);

  const intervalCount = useIncrementingNumber(intervalDelay);

  return range(0, WINDOW_SIZE).reduce((acc, index) => {
    const effectiveIntervalCount = isEnabled ? intervalCount : 0;

    const name = getColorPropName(uniqueId, index);
    const value = rainbowColors[(effectiveIntervalCount + index) % paletteSize];

    return {
      ...acc,
      [name]: value,
    };
  }, {});
};

export default useRainbow;