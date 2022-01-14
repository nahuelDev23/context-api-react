export const handleSetCharacters = (data) => {
    return (
        {
            type: 'setear',
            payload: { characters: data }
          }
    )
}

export const handleAddCharacters = (data) => {
    return (
        {
            type: 'add',
            payload: { characters: data }
          }
    )
}