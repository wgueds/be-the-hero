import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/**
 * importing pages
 */
import Logon from './pages/Logon';
import Register from './pages/Register';

/**
 * routes
 */
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}