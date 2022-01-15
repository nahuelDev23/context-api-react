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

export const handleDeleteCharacters = (id) => {

    return (
        {
            type: 'delete',
            payload: id
        }
    )
}

export const handleEditCharacters = (data) => {
    return (
        {
            type: 'edit',
            payload: { characters: data }
        }
    )
}
