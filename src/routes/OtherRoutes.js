import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/index';
import UserFormReducer from '../pages/Create/index';
import FormUpdate from '../pages/Update/index';
import FormDelete from '../pages/Delete/index';
import FormInsert from '../pages/Insert/index';

const OtherRoutes = () => {
    return (
        <BrowserRouter>
        <div>
            <Switch>
            <Route path="/create" component={UserFormReducer} />
            <Route path="/update" component={FormUpdate} />
            <Route path="/delete" component={FormDelete} />
            <Route path="/insert" component={FormInsert} />
            <Route path="/" component={Home} />
            </Switch>
        </div>
        </BrowserRouter>
    );
};

export default OtherRoutes;