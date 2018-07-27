import React from 'react';

const ForecastItem = ({date, day, astro}) => (
    <div className="forecast--item">
        <p>{date}</p>
        <p className="forecast--item--avg-temp">{day.avgtemp_c}</p>
        <img src={day.condition.icon} />
        <p className="forecast--item--astro">{`Sunrise at ${astro.sunrise}`}</p>
        <p className="forecast--item--astro">{`Sunset at ${astro.sunset}`}</p>
    </div>
)

export default ForecastItem