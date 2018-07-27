import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Forecast from '../Forecast';

const Main = () => (
    <div className="main">
        <Switch>
            <Route exact path='/' component={Forecast} />
        </Switch>
    </div>
)

export default Main