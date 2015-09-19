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

import React from 'react';

export default class Header extends React.Component {

	constructor() {
        super();     
    }

	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">

					<div className="navbar-header">
						<a className="navbar-brand" href="#">#Showcase</a>
					</div>
					<div>
					  <ul className="nav navbar-nav">
					  	<li><a target="_blank" href="http://krakenjs.com/">krakenJS</a></li>
						<li><a target="_blank" href="https://github.com/paypal/react-engine">react-engine</a></li>
						<li><a target="_blank" href="https://github.com/rackt/react-router">react-router</a></li>
						<li><a target="_blank" href="https://facebook.github.io/react/">react</a></li>
						<li><a target="_blank" href="http://handlebarsjs.com/">handlebars</a></li>
						<li><a target="_blank" href="https://webpack.github.io/">webpack</a></li>
						<li><a target="_blank" href="https://github.com/rackt/react-router">redux</a></li>
						<li><a target="_blank" href="https://babeljs.io/">babel</a></li>
					  </ul>
					</div>

				</div>
			</nav>
		);
	}
};
