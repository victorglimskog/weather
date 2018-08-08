import React from 'react';
import { connect } from 'react-redux';
import CityFilterForm from '../../components/CityFilterForm'
import { loadForecast } from '../../services/weather-service'

class CityFilter extends React.Component {
    state = {
        cityFilterInputValue: 'enter city name',
    }

    onCityFilterInputChange(event) {
        this.setState({
            cityFilterInputValue: event.target.value,
        })
    }

    onCityFilterInputClick() {
        this.setState({
            cityFilterInputValue: '',
        })
    }

    onCityFilterButtonClick() {
        const { dispatch } = this.props
        const cityName = this.state.cityFilterInputValue
        dispatch(loadForecast(cityName))
    }

    render() {
        return (
            <div className="city-filter">
                <CityFilterForm
                    onCityFilterInputChange={this.onCityFilterInputChange.bind(this)}
                    cityFilterInputValue={this.state.cityFilterInputValue}
                    onCityFilterInputClick={this.onCityFilterInputClick.bind(this)}
                    onCityFilterButtonClick={this.onCityFilterButtonClick.bind(this)}
                />
            </div>
        )
    }
}

export default connect()( CityFilter )