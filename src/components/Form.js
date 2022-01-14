import React, { useState } from 'react'
import { handleAddCharacters } from '../action/character/actionCharacter'
import { useTask } from '../context/character/CharacterContext'

export const Form = () => {
    const { state, dispatch } = useTask()

    const initState = {
        name:''
    }

    const [value, setValue] = useState(initState)

    const {name} = value

    const handleChange = ({ target }) => {
        const { value, name } = target
        setValue({
            [name]: value
        })
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(handleAddCharacters(value))
        console.log(state);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} value={name} />
                <button>Guardar</button>
            </form>
        </div>
    )
}
