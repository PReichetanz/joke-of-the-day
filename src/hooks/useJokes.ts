import jokes from '../lib/jokes';
import { Joke } from '../lib/types';
import useLocalStorage from './useLocalStorage';

export default function useJokes() {
  const [usedJokesId, setUsedJokesId] = useLocalStorage<string[]>(
    'usedJokesId',
    []
  );
  const [jokeIdsToBeUsed, setJokeIdsToBeUsed] = useLocalStorage<string[]>(
    'jokeIdsToBeUsed',
    jokes.map(joke => joke.id) // set jokes.ids here as initial value?
  );
  const [jokeOfTheDay, setJokeOfTheDay] = useLocalStorage<Joke>(
    'jokeOfTheDay',
    {
      id: '',
      question: '',
      answer: '',
    }
  );

  function getRandomJoke() {
    const randomIndex = getRandomIndex(0, jokeIdsToBeUsed.length - 1);
    let selectedJoke: Joke;
    if (usedJokesId.length === 0) {
      selectedJoke = jokes[randomIndex];
      filterUsedJokes(selectedJoke);
      return;
    }
    if (jokeIdsToBeUsed.length === 0) {
      selectedJoke = jokes[randomIndex];
      restartFilter(selectedJoke);
      return;
    } else {
      const unusedJokes = jokes.filter(joke => !usedJokesId.includes(joke.id));
      selectedJoke = unusedJokes[randomIndex];
    }
    filterUsedJokes(selectedJoke);
  }

  function filterUsedJokes(joke: Joke) {
    setUsedJokesId([...usedJokesId, joke.id]);
    setJokeIdsToBeUsed(jokeIdsToBeUsed.filter(id => id !== joke.id));
    setJokeOfTheDay(joke);
  }

  function restartFilter(joke: Joke) {
    setUsedJokesId([joke.id]);
    setJokeIdsToBeUsed(jokes.map(joke => joke.id).filter(id => id !== joke.id));
    setJokeOfTheDay(joke);
  }

  function getRandomIndex(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return { jokeOfTheDay, getRandomJoke };
}
