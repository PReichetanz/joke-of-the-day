import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Header from '../components/Header';
import JokeGenerator from '../components/JokeGenerator';
import useJokes from '../hooks/useJokes';

export default function JokeOfTheDay(): JSX.Element {
  const { jokeOfTheDay, getRandomJoke } = useJokes();

  useEffect(() => {
    getRandomJoke();
  }, []);

  return (
    <PageContainer>
      <Header />
      <main>
        <JokeGenerator jokeOfTheDay={jokeOfTheDay} />
      </main>
      <footer>
        <Button onClick={getRandomJoke}>Neuer Witz</Button>
      </footer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: 2fr 3fr 1fr;
  height: 100vh;
`;
