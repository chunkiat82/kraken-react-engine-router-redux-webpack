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

var React = require('react');
var Footer = require('./footer.jsx');
var Header = require('./header.jsx');

module.exports = React.createClass({

	render: function render() {

		return (
			<html>
				<head>
					<meta charSet='utf-8' />
					<title>
						{this.props.title}
					</title>
				</head>	
				<body>
					<Header/>

					<div className="vx_foreground-container">
						<div className="vx_mainContent">
							{this.props.children}
						</div>
					</div>
					
					{/* 
					<Footer {...this.props}>
					</Footer>
					*/}
						
				</body>
				  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"/>
				  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
				  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
				  <script src='/bundle.js'></script>
				  <script type="text/javascript" src="https://stuk.github.io/jszip/vendor/FileSaver.js"></script>
			</html>
		);
	}
});
