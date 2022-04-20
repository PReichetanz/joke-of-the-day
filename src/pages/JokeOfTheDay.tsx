import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import JokeGenerator from '../components/JokeGenerator';

export default function JokeOfTheDay(): JSX.Element {
  return (
    <PageContainer>
      <Header />
      <main>
        <JokeGenerator />
      </main>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: 2fr 3fr;
`;
