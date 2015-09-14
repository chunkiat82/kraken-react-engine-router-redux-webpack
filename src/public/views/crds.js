'use strict';

var Layout = require('./layout.js');
var React = require('react'),
    Button = require('react-bootstrap').Button,
    Input = require('react-bootstrap').Input;

import { Panel } from 'react-bootstrap';

var STYLES = {
    input:{
        marginTop:'1em'
    },
    nextBtn: {
        marginTop: '2em',
        width: '100%'
    }
};

module.exports = React.createClass({

    render: function() {
         var inputProps = {
                type:'text',
                className: 'vx_form-control',
                style: STYLES.input
            };

            function handleClick() {
              alert('You have clicked on you');
            }

        return (
            <div id="taskContainer" >

                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h1>Please configure your task..</h1><br/>
                        <h4>Level config</h4>                      
                    </div>
                    <div className="col-md-3"></div>
                </div>
                
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">

                        <Input type="select" label="" placeholder="select">
                          <option value="select">Select customer type</option>
                          <option value="cip">PERSON_PARTY</option>
                          <option value="kyc">BUSINESS_PARTY</option>
                        </Input>
                        
                    </div>
                    <div className="col-md-3"></div>
                </div>

                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">

                        <Input type="select" label="" placeholder="select">
                          <option value="select">Select level</option>
                          <option value="cip">CIP</option>
                          <option value="kyc">KYC</option>
                        </Input>
                        
                    </div>
                    <div className="col-md-3"></div>
                </div>

                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">

                        <Input type="select" label="" placeholder="select">
                          <option value="select">Select role</option>
                          <option value="cip">PAYPAL_PRIMARY_USER</option>
                          <option value="kyc">DIRECTOR</option>
                          <option value="kyc">BENEFICIAL_OWNER</option>
                        </Input>
                        
                    </div>
                    <div className="col-md-3"></div>
                </div>

                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h4>Criteria config</h4>                     
                    </div>
                    <div className="col-md-3"></div>
                </div>

                
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">

                        <Input type="select" label="" placeholder="select">
                          <option value="select">Select criteria</option>
                          <option value="cip">THIRD_PARTY_VERIFICATION</option>
                          <option value="kyc">PROOF_OF_TAX_ID</option>
                        </Input>
                        
                    </div>
                    <div className="col-md-3"></div>
                </div>


                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <Button type='submit' bsStyle="primary" bsSize="small" style={STYLES.nextBtn}>Next</Button>                        
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>

           
        );
    }
});
