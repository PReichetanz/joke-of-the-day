import jokes from '../lib/jokes';
import { Joke } from '../lib/types';
import useLocalStorage from './useLocalStorage';

export default function useJokes() {
  const [usedJokesId, setUsedJokesId] = useLocalStorage<number[]>(
    'usedJokesId',
    []
  );
  const [jokeIdsToBeUsed, setJokeIdsToBeUsed] = useLocalStorage<number[]>(
    'jokeIdsToBeUsed',
    jokes.map(joke => joke.id)
  );
  const [jokeOfTheDay, setJokeOfTheDay] = useLocalStorage<Joke>(
    'jokeOfTheDay',
    {
      id: 0,
      question: '',
      answer: '',
    }
  );

  function getRandomJoke() {
    let randomIndex: number;
    if (jokeIdsToBeUsed.length === 0) {
      randomIndex = getRandomIndex(0, jokes.length - 1);
    } else {
      randomIndex = getRandomIndex(0, jokeIdsToBeUsed.length - 1);
    }
    console.log(randomIndex);
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

  return { jokeOfTheDay, getRandomJoke, jokeIdsToBeUsed };
}
