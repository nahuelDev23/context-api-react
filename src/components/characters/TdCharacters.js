import React from 'react'
import { handleDeleteCharacters } from '../../action/character/actionCharacter'
import { useTask } from '../../context/character/CharacterContext'
import { Button } from '../ui/Button'

export const TdCharacters = ({ character, handleGetOne }) => {
    
    const { dispatch } = useTask()

    const { id, image, name } = character

    const handleDelete = (id) => {
        dispatch(handleDeleteCharacters(id))
    }

    return (
        <tr>
            <td>
                <img className="table_img" src={image} alt={name} />
            </td>
            <td>
                {name}
            </td>
            <td>
                <Button txt='Elimiar' action={(e) => handleDelete(id)} />
                <Button txt='Editar' action={(e) => handleGetOne(id)} />
            </td>
        </tr>
    )
}
