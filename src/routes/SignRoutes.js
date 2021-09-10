import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../pages/Main';
import Login from '../pages/Login';

const SignRoutes = () => {
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/Login" component={Login} />
            <Route path="/" component={Main} />

        </Switch>
        </BrowserRouter>
    );
};

export default SignRoutes;
