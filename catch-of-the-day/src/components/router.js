import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import StorePicker from './storePicker';
import App from './app';
import NotFound from './notFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker}/>
            <Route path="/store/:storeId" component={App}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Router;