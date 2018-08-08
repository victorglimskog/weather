// import React from 'react';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import ForecastItem from '../../components/ForecastItem'

const mapStateToProps = state => {
    return {
        forecast: state.weather.forecast.forecastDays,
        location: state.weather.forecast.location,
        loading: state.weather.loading,
        error: state.weather.error,
    }
}

class Forecast extends Component {

    render() {
        const { forecast, location, loading, error } = this.props

        if ( loading ) {
            return (
                <div className="forecast--loading-message">
                    Loading ...
                </div>
            )
        }

        if ( error ) {
            return (
                <div className="forecast--error-message">
                    {error.message}
                </div>
            )
        }

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
                    : (
                        <div className="forecast--welcome-message">
                            Please enter a city name to get a 7 day forecast
                        </div>
                    )}
            </div>
        )
    }
}

export default connect( mapStateToProps )( Forecast )