import React from 'react';
import styled from 'styled-components';

import useRainbow from './useRainbow';

const MagicRainbowButton = ({
  children,
  intervalDelay = 1000,
  ...delegated
}) => {
  const transitionDelay = intervalDelay * 1.25;

  const colors = useRainbow({ intervalDelay });

  const colorKeys = Object.keys(colors);

  function hoverTextEnter(e) {
    e.target.style.filter = 'contrast(200%)';
  }
  function hoverTextLeave(e) {
    e.target.style.filter = 'none';
  }

  return (
    <ButtonElem
      onMouseEnter={hoverTextEnter} onMouseLeave={hoverTextLeave}
      {...delegated}
      style={{
        ...colors,
        transition: `
          ${colorKeys[0]} ${transitionDelay}ms linear,
          ${colorKeys[2]} ${transitionDelay}ms linear,
          ${colorKeys[1]} ${transitionDelay}ms linear
        `,
        background: `
          radial-gradient(
            circle at top right,
            var(${colorKeys[2]}),
            var(${colorKeys[1]}),
            var(${colorKeys[0]})
          ) 
        `,
      }}
    >
      {children}
    </ButtonElem>
  );
};

const ButtonElem = styled.button`
  position: relative;
  border: none;
  color: white;
  width: 200px;
  height: 60px;
  border-radius: 80px;
  font-size: 25px;
  cursor: pointer;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
`;

export default MagicRainbowButton;