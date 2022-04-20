import React, { useEffect } from 'react';
import jokes from '../lib/jokes';
import { Joke } from '../lib/types';
import Card from './Card';

type JokeGeneratorProps = {
  jokeOfTheDay: Joke;
  onHandleRandomJoke: (randomJoke: Joke) => void;
};

export default function JokeGenerator({
  jokeOfTheDay,
  onHandleRandomJoke,
}: JokeGeneratorProps): JSX.Element {
  useEffect(() => {
    getRandomJoke();
  }, []);

  return <Card joke={jokeOfTheDay} />;

  function getRandomJoke() {
    const randomIndex = getRandomIndex(0, jokes.length - 1);
    onHandleRandomJoke(jokes[randomIndex]);
  }

  function getRandomIndex(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
