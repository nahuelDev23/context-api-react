import React, { useCallback, useEffect, useState } from 'react'
import { handleSetCharacters } from '../../action/character/actionCharacter'
import { useTask } from '../../context/character/CharacterContext'
import { fetchApi } from '../../utils/fetchApi'
import { Form } from '../Form'
import './TableCharacters.css'
import { TdCharacters } from './TdCharacters'

const URL = 'https://rickandmortyapi.com/api/character'

export const TableCharacters = ({ setLoading }) => {

    const { state, dispatch } = useTask()

    const { characters } = state

    const [showModal, setShowModal] = useState(false)

    const [currentChar, setCurrentChar] = useState()

    const fetchCharacter = useCallback(async () => {
        setLoading(true)
        const req = await fetchApi(URL)
        const res = await req.json()
        await dispatch(handleSetCharacters(res.results))
        setLoading(false)
    }, [dispatch, setLoading])

    const handleGetOne = (id) => {
        const current = characters.find(char => char.id === id)
        setCurrentChar(current)
        setShowModal(true)
    }

    useEffect(() => {
        fetchCharacter()
    }, [fetchCharacter])

    return (
        <>
            {showModal && <Form newChar={false} initState={currentChar} setShowModal={setShowModal}/>}
            <table className='table'>
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Nombre</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {state.characters.map(character => (
                        <TdCharacters character={character} handleGetOne={handleGetOne} key={character.id} />
                    ))}
                </tbody>
            </table>
            
        </>
    )
}
