import React, { useState } from 'react';
import styled from 'styled-components';
import type { Joke } from '../lib/types';
import Header from '../components/Header';
import JokeGenerator from '../components/JokeGenerator';

export default function JokeOfTheDay(): JSX.Element {
  const [jokeOfTheDay, setJokeOfTheDay] = useState<Joke>({
    id: '',
    question: '',
    answer: '',
  });
  return (
    <PageContainer>
      <Header />
      <main>
        <JokeGenerator
          jokeOfTheDay={jokeOfTheDay}
          onHandleRandomJoke={handleRandomJoke}
        />
      </main>
    </PageContainer>
  );

  function handleRandomJoke(randomJoke: Joke) {
    setJokeOfTheDay(randomJoke);
  }
}

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: 2fr 3fr;
`;
