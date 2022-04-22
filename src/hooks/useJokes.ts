import jokes from '../lib/jokes';
import { Joke } from '../lib/types';
import useLocalStorage from './useLocalStorage';

export default function useJokes() {
  const [jokeOfTheDay, setJokeOfTheDay] = useLocalStorage<Joke>(
    'jokeOfTheDay',
    {
      id: '',
      question: '',
      answer: '',
    }
  );

  function getRandomJoke() {
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
