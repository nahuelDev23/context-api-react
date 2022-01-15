import React from 'react'

export const Button = ({txt,action}) => {
    return (
        <button onClick={action}>
           {txt}
        </button>
    )
}
