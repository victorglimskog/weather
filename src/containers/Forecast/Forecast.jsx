// import React from 'react';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import ForecastItem from '../../components/ForecastItem'
import { loadForecast } from '../../services/weather-service'

const mapStateToProps = state => {
    return {
        forecast: state.weather.forecast.forecastDays,
        location: state.weather.forecast.location,
    }
}

class Forecast extends Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(loadForecast())
    }

    render() {
        const { forecast, location } = this.props

        return (
            <div className="forecast">
                {   forecast
                    ? (
                        <div className="forecast--inner">
                            <div className="forecast--location">
                                <p> Showing 7 day forecast for {location.cityName}, {location.country} </p>
                            </div>
                            <div className="forecast--days">
                                {forecast.map( (day, index) => (
                                    <ForecastItem
                                        key={`forecastday${index}`}
                                        date={day.date}
                                        day={day.day}
                                        astro={day.astro}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                    : ( null )}
            </div>
        )
    }
}

export default connect( mapStateToProps )( Forecast )