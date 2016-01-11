import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../public/views/app.jsx';
// import Scenario from '../public/views/scenario.jsx';
import Wizard from '../public/views/wizard.jsx';

module.exports = (
    <Route path="/" component={App}>
        <IndexRoute name="wizard" component={Wizard}/>
    </Route>
);
