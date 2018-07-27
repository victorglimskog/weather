import React from 'react';
import { connect } from 'react-redux';
import ForecastItem from '../../components/ForecastItem'

const Forecast = ({ forecast }) => (
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

const mapStateToProps = state => {
    console.log('state: ', state)
    return {
        forecast: state.weather.forecast,
    }
}

export default connect( mapStateToProps )( Forecast )