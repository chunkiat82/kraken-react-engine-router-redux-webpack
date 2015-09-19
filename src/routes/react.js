'use strict';

import React from 'react';
import {Router, Route, DefaultRoute} from 'react-router';

import App from '../public/views/app.jsx';
import Scenario from '../public/views/scenario.jsx';
import Container from '../public/views/container.jsx';

var routes = module.exports = (
  	<Route path="/" handler={App} >
        <DefaultRoute name='wizard' handler={Container}/> 
    </Route>
);
