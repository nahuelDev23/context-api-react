import React from 'react'
import { Layaout } from '../../components/layaout/Layaout'
import { useTask } from '../../context/character/CharacterContext'

export const About = () => {
    const { state } = useTask()
    return (
        <Layaout>
            {state.characters && state.characters.map(el => (
                <p key={el.id}>{el.name}</p>
            ))}
        </Layaout>
    )
}
