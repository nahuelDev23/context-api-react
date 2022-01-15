import React, { useEffect, useState } from 'react'
import { handleAddCharacters, handleEditCharacters } from '../action/character/actionCharacter'
import { useTask } from '../context/character/CharacterContext'

export const Form = ({ setShowModal, newChar = true, initState = { id: '', name: '' } }) => {

    const { dispatch } = useTask()

    const [formValue, setFormValue] = useState(initState)

    const { name } = formValue

    const handleChange = ({ target }) => {
        const { value, name } = target
        setFormValue({
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        formValue.id = initState.id
        newChar ? dispatch(handleAddCharacters(formValue)) : dispatch(handleEditCharacters(formValue))
        setShowModal(false)
    }


    useEffect(() => {
        setFormValue(initState)
    }, [initState])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} value={name} />
                <button>{newChar ? 'Guardar' : 'Editar'}</button>
            </form>
        </div>
    )
}
