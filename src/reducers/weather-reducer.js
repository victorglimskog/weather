const initialState = {
    forecast: [],
}


const weather = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FORECAST':
            return {
                ...state,
                forecast: action.forecastData,
            }
        default:
            return state
    }
}

export default weather