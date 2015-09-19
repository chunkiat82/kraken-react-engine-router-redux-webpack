

import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from '../../containers/App';
import configureStore from '../../store/configureStore';

const store = configureStore();

export default class Wizard extends React.Component {
	render() {
		return (
			<Provider store={store}>
    			{() => <AppContainer />}
  			</Provider>
		)
	}
}