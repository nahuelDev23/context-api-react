export const inititalState = {
    characters: []
}

export const reducer = (state = inititalState, action) => {

    switch (action.type) {
        case 'setear':
            return {
                ...state,
                characters: [...action.payload.characters]
            }
        case 'add':
            return {
                ...state,
                characters: [action.payload.characters, ...state.characters]
            }
        case 'delete':
            return {
                ...state,
                characters: state.characters.filter(char => char.id !== action.payload)
            }
        case 'edit':
            return {
                ...state,
                characters: state.characters.map(char => char.id === action.payload.characters.id ?  {...char,name:action.payload.characters.name} : char)
            }
        default:
            return state;
    }
}