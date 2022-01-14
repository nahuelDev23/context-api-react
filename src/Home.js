import { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { handleSetCharacters } from './action/character/actionCharacter';
import { Form } from './components/Form';
import { useTask } from './context/character/CharacterContext';
import { fetchApi } from './utils/fetchApi';

export const Home = () => {
  const { state, dispatch } = useTask()

  const fetchCharacter = useCallback(async () => {
    const req = await fetchApi('https://rickandmortyapi.com/api/character')
    const res = await req.json()
    dispatch(handleSetCharacters(res.results))
  }, [dispatch])

  useEffect(() => {
    fetchCharacter()
  }, [fetchCharacter])

  return (
    <div>
      <Form/>
      <Link to='about'>about</Link>
      {state.characters && state.characters.map(el => (
        <p key={el.id}>{el.name}</p>
      ))}
    </div>
  )
}
