import React, { useEffect, useState } from 'react';
import jokes from '../lib/jokes';
import Card from './Card';
import type { Joke } from '../lib/types';

export default function JokeGenerator(): JSX.Element {
  const [jokeOfTheDay, setJokeOfTheDay] = useState<Joke>({
    id: '',
    question: '',
    answer: '',
  });

  useEffect(() => {
    const randomIndex = getRandomIndex(0, jokes.length - 1);
    setJokeOfTheDay(jokes[randomIndex]);
  }, []);

  return <Card joke={jokeOfTheDay} />;

  function getRandomIndex(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
