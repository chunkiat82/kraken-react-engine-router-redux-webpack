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
					  	<li><a href="#">krakenJS</a></li>
						<li><a href="#">react-engine</a></li>
						<li><a href="#">react-router</a></li>
						<li><a href="#">react</a></li>
						<li><a href="#">handlerbars</a></li>
						<li><a href="#">webpack</a></li>
						<li><a href="#">webpack.hot</a></li>
						<li><a href="#">babel</a></li>
					  </ul>
					</div>

				</div>
			</nav>
		);
	}
};
