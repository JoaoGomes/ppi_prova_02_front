import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Cidade from '../pages/Cidade';

const SignRoutes = () => {
    return (
        <BrowserRouter>
            
            <Route path="/" component={Login} />
            <Route path="/:id" component={Cidade} />
        </BrowserRouter>
    );
};

export default SignRoutes;