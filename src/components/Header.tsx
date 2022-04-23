import React from 'react';
import styled from 'styled-components';

export default function Header(): JSX.Element {
  return (
    <Headercontainer>
      <Heading>Flacher Witz:</Heading>
    </Headercontainer>
  );
}

const Headercontainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  margin: 0;
  padding: 1rem;
  color: var(--color-headline);
`;
