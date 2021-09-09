import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Create from '../pages/Create';
import Update from '../pages/Update';
import Delete from '../pages/Delete';

const OtherRoutes = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={Home} />
            <Route path="/create" component={Create}/>
            <Route path="/update" component={Update}/>
            <Route path="/delete" component={Delete}/>
        </BrowserRouter>
    );
};

export default OtherRoutes;