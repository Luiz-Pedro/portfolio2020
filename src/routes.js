import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Projetos from './Pages/Projetos';

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/> 
                <Route exact path="/projetos" component={Projetos}/> 
            </Switch>
        </BrowserRouter>
    );
}