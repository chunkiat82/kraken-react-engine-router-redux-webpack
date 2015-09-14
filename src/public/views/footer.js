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

module.exports = React.createClass({

	render: function render() {

		return (
			<div className="vx_globalFooter-container">
				<div className="vx_globalFooter">
					<div className="vx_globalFooter-content">
						<ul className="vx_globalFooterList-links">							
								<li>
									Help
								</li>							   
								<li>
									Contact
								</li>							
								<li>
									Security
								</li>						   
						</ul>


					   
							<p className="vx_globalFooterLink-feedback" id="siteFeedback">
							   Feedback
							</p>
						

						<p className="vx_globalFooterCopyright">
							Copyright...
						</p>
						<ul className="vx_globalFooterList-links_secondary">

							
								<li>
								   Privacy
								</li>
						   
								<li>
									Legal
								</li>
						   
								<li>
								   Policy updates
								</li>
							

						</ul>
					</div>
				</div>
			</div>
		);
	}
});
