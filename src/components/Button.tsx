import type { ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: ReactNode;
};

const Button = styled.button<ButtonProps>`
  background: var(--button-background);
  color: var(--button-text);
  border-radius: 0.5rem;
  border: 3px solid var(--button-stroke);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  font-weight: 700;
  padding: 1rem;
  display: block;
  width: 80%;
  margin: auto;
  &:active {
    background: var(--button-stroke);
    color: var(--color-highlight);
  }
`;

export default Button;
