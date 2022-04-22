import React from 'react';
import { Joke } from '../lib/types';
import Card from './Card';

type JokeGeneratorProps = {
  jokeOfTheDay: Joke;
};

export default function JokeGenerator({
  jokeOfTheDay,
}: JokeGeneratorProps): JSX.Element {
  console.log('jokeOfTheDay in JokeGenerator', jokeOfTheDay);

  return <Card joke={jokeOfTheDay} />;
}
