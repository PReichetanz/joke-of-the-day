import { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Header from '../components/Header';
import JokeGenerator from '../components/JokeGenerator';
import useJokes from '../hooks/useJokes';
import { Link } from 'react-router-dom';

export default function JokeOfTheDay(): JSX.Element {
  const { jokeOfTheDay, getRandomJoke, jokeIdsToBeUsed } = useJokes();

  useEffect(() => {
    getRandomJoke();
  }, []);

  return (
    <PageContainer>
      <Header heading="Flacher Witz:" />
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
        <StyledLink to="/addJoke" aria-label="Eigenen Witz hinzufügen">
          +
        </StyledLink>
      </footer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 2fr;
  height: 100vh;
  position: relative;
`;

const StyledLink = styled(Link)`
  width: 20%;
  margin: 1rem auto;
  text-decoration: none;
  background: var(--button-background);
  color: var(--button-text);
  border-radius: 0.5rem;
  border: 3px solid var(--button-stroke);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  font-weight: 700;
  padding: 0.5rem;
  display: block;
  &:hover {
    background: var(--color-highlight);
    color: var(--color-stroke);
    border: 3px solid var(--color-stroke);
  }
  &:active {
    background: var(--button-stroke);
    color: var(--color-highlight);
  }
`;
