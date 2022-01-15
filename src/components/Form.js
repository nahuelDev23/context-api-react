import React, { useEffect, useState } from 'react'
import { handleAddCharacters, handleEditCharacters } from '../action/character/actionCharacter'
import { useTask } from '../context/character/CharacterContext'
import { validateForm } from '../utils/validateForm'
import './form.css'
export const Form = ({ setShowModal, newChar = true, initState = { id: '', name: '' } }) => {

    const { dispatch } = useTask()

    const [formValue, setFormValue] = useState(initState)
    const [error, setError] = useState(null)
    const { name } = formValue

    const handleChange = ({ target }) => {
        const { value, name } = target
        setFormValue({
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try { await validateForm(formValue) } catch (error) { setError(error.message); }

        formValue.id = initState.id

        newChar ? dispatch(handleAddCharacters(formValue)) : dispatch(handleEditCharacters(formValue))

        setShowModal(false)

    }


    useEffect(() => {
        setFormValue(initState)
    }, [initState])

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                {error && <p className='error'>{error}</p>}
                <input type="text" name="name" onChange={handleChange} value={name} />
                <button className='ml-4'>{newChar ? 'Guardar' : 'Editar'}</button>
            </form>
        </div>
    )
}
