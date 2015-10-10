'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from '../../containers/App';
import configureStore from '../../store/configureStore';

// React components for Redux DevTools

const store = configureStore();

export default class Container extends React.Component {
	render() {
        if (__DEVELOPMENT__){
            const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
            return (
                <div>
                    <Provider store={store}>
                        {() => <AppContainer />}
                    </Provider>
                    <DebugPanel top right bottom>
                            <DevTools store={store} monitor={LogMonitor} />
                    </DebugPanel>
                </div>
            )    
        }else{
            return (
                <div>
                    <Provider store={store}>
                        {() => <AppContainer />}
                    </Provider>
                </div>
            )
        }
		
	}
}