import { useState } from 'react';
import jokes from '../lib/jokes';
import { Joke } from '../lib/types';

export default function useJokes() {
  const [jokeOfTheDay, setJokeOfTheDay] = useState<Joke>({
    id: '',
    question: '',
    answer: '',
  });
  console.log('jokeOfTheDay:', jokeOfTheDay);

  function getRandomJoke() {
    console.log('getRandomJoke was called');
    const randomIndex = getRandomIndex(0, jokes.length - 1);
    setJokeOfTheDay(jokes[randomIndex]);
  }

  function getRandomIndex(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return { jokeOfTheDay, getRandomJoke };
}
