import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import Header from '../components/Header';
import useJokes from '../hooks/useJokes';
import { useNavigate } from 'react-router-dom';

export default function AddJokes(): JSX.Element {
  const { addNewJoke } = useJokes();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addNewJoke(question, answer);
    setQuestion('');
    setAnswer('');
    navigate('/');
  }

  return (
    <PageContainer>
      <Header heading="Neuer Witz:" />
      <main>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="question">Frage:</Label>
          <textarea
            id="question"
            onChange={event => setQuestion(event.target.value)}
            required
          />
          <Label htmlFor="answer">Antwort:</Label>
          <textarea
            id="answer"
            onChange={event => setAnswer(event.target.value)}
            required
          />
          <Button type="submit">Neuen Witz hinzufügen</Button>
        </Form>
      </main>
      <footer>
        <StyledLink to="/">Zurück</StyledLink>
      </footer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  margin: 2rem auto;
`;

const Label = styled.label`
  font-weight: 700;
  color: var(--color-headline);
`;

const StyledLink = styled(Link)`
  width: 40%;
  text-decoration: none;
  background: var(--button-background);
  color: var(--button-text);
  border-radius: 0.5rem;
  border: 3px solid var(--button-stroke);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  font-weight: 700;
  padding: 0.5rem;
  display: block;
  margin: auto;
  &:hover {
    background: var(--color-highlight);
    color: var(--color-stroke);
    border: 3px solid var(--color-stroke);
  }
  &:active {
    background: var(--button-stroke);
    color: var(--color-highlight);
  }
`;
