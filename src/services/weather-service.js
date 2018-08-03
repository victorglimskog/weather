import { setForecast } from '../actions'
import axios from 'axios'

export const fetchForecast = () => async dispatch => {
    const url = 'http://api.apixu.com/v1/forecast.json?key=439c11a67dfd43b292c190003181207&q=Malmö&days=7'
    let forecastData = null
    let response = null

    try {
        response = await axios.get(url).then(response => response)
        console.log('response: ', response)
    } catch( err ) {
        throw new Error('There was a problem when fetching from the weather API')
    }

    if ( !response.data ) {
        throw new Error('Unexpected data structure of response from weather API')
    } else if ( !response.data.forecast) {
        throw new Error('No forecast data found for the given location')
    }

    return response.data.forecast.forecastday
}

export const loadForecast = () => async dispatch => {
    let data = null
    try {
        data = await dispatch(fetchForecast())
    } catch (err) {
        data = []
    }
    dispatch(setForecast(data))
}