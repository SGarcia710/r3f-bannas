import styled, { keyframes } from 'styled-components';

export const fade = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const FadeIn = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: #ffd863;
  animation: ${fade} 4s normal forwards ease-in-out;
`;

export const Overlay = styled.div`
  font-family: 'Inter';
  font-size: 16px;
  display: flex;

  & h1 {
    padding: 0;
    margin: 0 0 0.05em 0;
    font-family: 'Ayer Poster', serif;
    font-weight: 400;
    font-size: min(18vw, 14em);
    line-height: 0.85em;
  }
`;

export const TopLeft = styled.div`
  position: absolute;
  top: 5vw;
  left: 5vw;
`;

export const BottomLeft = styled.div`
  position: absolute;
  bottom: 5vw;
  left: 5vw;
  width: 30ch;
  max-width: 40%;
`;
