import React from 'react';
import CityFilter from '../../containers/CityFilter'

const Header = () => (
    <div className="header">
        <p className="header--logo">Weather</p>
        <CityFilter />
    </div>
)

export default Header