import { Route, Routes } from 'react-router-dom';
import AddJokes from './pages/AddJokes';
import JokeOfTheDay from './pages/JokeOfTheDay';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<JokeOfTheDay />} />
      <Route path="addJoke" element={<AddJokes />} />
    </Routes>
  );
}
