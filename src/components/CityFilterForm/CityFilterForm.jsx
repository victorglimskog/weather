import React from 'react'
import PropTypes from 'prop-types'

const CityFilterForm = ({
    cityFilterInputValue,
    onCityFilterInputChange,
    onCityFilterInputClick,
    onCityFilterButtonClick,
}) => (
    <div className="city-filter--form">
        <input
            type="text"
            className="city-filter--form--input"
            value={cityFilterInputValue}
            onChange={onCityFilterInputChange}
            onClick={onCityFilterInputClick}
        />
        <button
            onClick={onCityFilterButtonClick}
            className="city-filter--form--button"
        >
            GO!
        </button>
    </div>
)

CityFilterForm.propTypes = {
    cityFilterInputValue: PropTypes.string,
    onCityFilterInputChange: PropTypes.func.isRequired,
    onCityFilterInputClick: PropTypes.func.isRequired,
    onCityFilterButtonClick: PropTypes.func.isRequired,
}

export default CityFilterForm