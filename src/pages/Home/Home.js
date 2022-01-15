import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '../../components/Form';
import ClipLoader from "react-spinners/ClipLoader";
import { TableCharacters } from '../../components/characters/TableCharacters';
import { Layaout } from '../../components/layaout/Layaout';

export const Home = () => {

  const [loading, setLoading] = useState(false)

  const initState = {
    name: ''
  }

  return (
    <Layaout>
      <Form initState={initState} />
      <TableCharacters setLoading={setLoading} />
      {loading && <ClipLoader color={'#e4d7d8'} />}
    </Layaout>
  )
}
