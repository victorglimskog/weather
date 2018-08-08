import React from 'react';
import CityFilter from '../CityFilter'

const Header = () => (
    <div className="header">
        <p className="header--logo">Weather</p>
        <CityFilter />
    </div>
)

export default Header