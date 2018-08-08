const initialState = {
    forecast: [],
    loading: false,
    error: false,
}


const weather = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FORECAST':
            return {
                ...state,
                forecast: action.forecastData,
            }
        case 'SET_FORECAST_LOADING':
            return {
                ...state,
                loading: action.loading,
            }
        case 'SET_FORECAST_ERROR':
            return {
                ...state,
                error: action.error,
            }
        default:
            return state
    }
}

export default weather