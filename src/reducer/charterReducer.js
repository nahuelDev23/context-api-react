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
                characters: [action.payload.characters,...state.characters]
            }
        default:
            return state;
    }
}