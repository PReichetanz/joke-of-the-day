import type { ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: ReactNode;
};

const Button = styled.button<ButtonProps>`
  background: var(--color-stroke);
  color: var(--color-highlight);
  border-radius: 0.5rem;
  border: 3px solid var(--color-highlight);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  font-weight: 700;
  padding: 1rem;
  display: block;
  width: 80%;
  margin: auto;
  &:hover {
    background: var(--color-highlight);
    color: var(--color-stroke);
    border: 3px solid var(--color-stroke);
  }
  &:active {
    background: var(--color-sub-headline);
    color: var(--color-highlight);
  }
`;

export default Button;
