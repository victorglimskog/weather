// import React from 'react';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import ForecastItem from '../../components/ForecastItem'
import { loadForecast } from '../../services/weather-service'

const mapStateToProps = state => {
    console.log('state: ', state)
    return {
        forecast: state.weather.forecast,
    }
}

class Forecast extends Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(loadForecast())
    }

    render() {
        const { forecast } = this.props

        return (
            <div className="forecast">
                {   forecast
                    ? (
                        forecast.map( (day, index) => (
                            <ForecastItem
                                key={`forecastday${index}`}
                                date={day.date}
                                day={day.day}
                                astro={day.astro}
                            />
                        ))
                    )
                    : ( null )}
            </div>
        )
    }
}

export default connect( mapStateToProps )( Forecast )