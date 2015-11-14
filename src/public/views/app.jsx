/*-------------------------------------------------------------------------------------------------------------------*\
|  Copyright (C) 2015 PayPal                                                                                          |
|                                                                                                                     |
|  Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance     |
|  with the License.                                                                                                  |
|                                                                                                                     |
|  You may obtain a copy of the License at                                                                            |
|                                                                                                                     |
|       http://www.apache.org/licenses/LICENSE-2.0                                                                    |
|                                                                                                                     |
|  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed   |
|  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for  |
|  the specific language governing permissions and limitations under the License.                                     |
\*-------------------------------------------------------------------------------------------------------------------*/

'use strict';

import Layout from './layout.jsx';
import Header from './header.jsx';
import React from 'react';
import {Router} from 'react-router' ;

import configureStore from '../../store/configureStore' ;
import { Provider } from 'react-redux';
const store = configureStore();

export default class App extends React.Component {
	render() {
      
        return (    
            <Provider store={store}>            
                <Layout {...this.props} />                
            </Provider>                
        )      
	}
}