import { Joke } from '../lib/types';
import Card from './Card';

type JokeGeneratorProps = {
  jokeOfTheDay: Joke;
};

export default function JokeGenerator({
  jokeOfTheDay,
}: JokeGeneratorProps): JSX.Element {
  return <Card joke={jokeOfTheDay} />;
}
