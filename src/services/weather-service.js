import { setForecast, setForecastLoading, setForecastError } from '../actions'
import axios from 'axios'

export const fetchForecast = (city) => async dispatch => {
    const url = `http://api.apixu.com/v1/forecast.json?key=439c11a67dfd43b292c190003181207&q=${city}&days=7`
    let response = null

    try {
        response = await axios.get(url).then(response => response)
    } catch( err ) {
        throw new Error('There was a problem when fetching from the weather API')
    }

    if ( !response.data ) {
        throw new Error('Unexpected data structure of response from weather API')
    } else if ( !response.data.forecast) {
        throw new Error('No forecast data found for the given location')
    }

    return {
        forecastDays: response.data.forecast.forecastday,
        location: {
            cityName: response.data.location.name,
            country: response.data.location.country,
        }
    }
}

export const loadForecast = (city) => async dispatch => {
    let data = null

    try {
        dispatch(setForecastLoading(true))
        data = await dispatch(fetchForecast(city))
    } catch (err) {
        data = []
        dispatch(setForecastError(err))
    }
    dispatch(setForecast(data))
    dispatch(setForecastLoading(false))
}