export const setForecast = forecastData => ({
    type: 'SET_FORECAST',
    forecastData
})

export const setForecastLoading = loading => ({
    type: 'SET_FORECAST_LOADING',
    loading
})

export const setForecastError = error => ({
    type: 'SET_FORECAST_ERROR',
    error
})