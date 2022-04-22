import React from 'react';
import styled from 'styled-components';
import { Joke } from '../lib/types';

type CardProps = {
  joke: Joke;
};

export default function Card({ joke }: CardProps): JSX.Element {
  return (
    <Container>
      <Headline>{joke.question}</Headline>
      <Paragraph>{joke.answer}</Paragraph>
    </Container>
  );
}

const Container = styled.article`
  background-color: var(--color-card-background);
  margin: 1rem;
  padding: 2rem;
  border-radius: 1rem;
`;

const Headline = styled.h2`
  color: var(--color-card-heading);
`;

const Paragraph = styled.p`
  color: var(--color-card-paragraph);
`;
