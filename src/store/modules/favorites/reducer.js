const favorites = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FAVORITES':
            return [ ...state, action.movie]
        default:
            return state
    }
}

export default favorites