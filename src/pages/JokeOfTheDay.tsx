import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Header from '../components/Header';
import JokeGenerator from '../components/JokeGenerator';
import useJokes from '../hooks/useJokes';

export default function JokeOfTheDay(): JSX.Element {
  const { jokeOfTheDay, getRandomJoke, jokeIdsToBeUsed } = useJokes();

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
        <p>Es gibt noch {jokeIdsToBeUsed.length} weitere Witze.</p>

        {jokeIdsToBeUsed.length > 0 ? (
          <Button onClick={getRandomJoke}>Gib mir mehr!</Button>
        ) : (
          <Button onClick={getRandomJoke}>Nochmal von vorn, bitte!</Button>
        )}
      </footer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr 2fr;
  height: 100vh;
`;
