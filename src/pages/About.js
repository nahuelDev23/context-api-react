import React from 'react'
import { useTask } from '../context/character/CharacterContext'

export const About = () => {
    const { state } = useTask()
    return (
        <div>
            {state.characters && state.characters.map(el => (
                <p key={el.id}>{el.name}</p>
            ))}
        </div>
    )
}
