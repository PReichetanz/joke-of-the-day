import { ReactNode } from 'react';
import styled from 'styled-components';

type HeaderProps = {
  heading: ReactNode;
};

export default function Header({ heading }: HeaderProps): JSX.Element {
  return (
    <Headercontainer>
      <Heading>{heading}</Heading>
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
