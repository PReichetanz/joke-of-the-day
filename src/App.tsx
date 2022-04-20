import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import JokeGenerator from './components/JokeGenerator';

export default function App(): JSX.Element {
  return (
    <Appcontainer>
      <Header />
      <JokeGenerator />
    </Appcontainer>
  );
}

const Appcontainer = styled.div`
  display: grid;
  grid-template-rows: 2fr 3fr;
`;
