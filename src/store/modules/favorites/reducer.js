const favorites = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FAVORITES':
            var ehRepetido = false
            for (const favorite of state) {
                if (favorite.id === action.movie.id) {
                    ehRepetido = true;
                }
            }
            if (!ehRepetido) {
                return [...state, action.movie]
            }
        default:
            return state
    }
}


export default favorites