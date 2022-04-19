import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type HeaderProps = {
  children: ReactNode;
};

export default function Header({ children }: HeaderProps): JSX.Element {
  return (
    <header>
      <Heading>{children}</Heading>
    </header>
  );
}

const Heading = styled.h1`
  margin: 0;
  padding: 1rem;
  color: var(--color-headline);
`;
