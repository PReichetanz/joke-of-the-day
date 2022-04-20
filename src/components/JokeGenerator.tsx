import React, { useEffect } from 'react';
import useJokes from '../hooks/useJokes';
import Card from './Card';

export default function JokeGenerator(): JSX.Element {
  const { jokeOfTheDay, getRandomJoke } = useJokes();

  useEffect(() => {
    getRandomJoke();
  }, []);

  return <Card joke={jokeOfTheDay} />;
}
