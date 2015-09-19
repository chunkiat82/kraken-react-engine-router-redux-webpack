'use strict';

import Layout from './layout.jsx';
import React from 'react';
import {Button, Input,Panel} from 'react-bootstrap';
import serialize from 'form-serialize';
import CRDSConvertor from '../crdsConvertor.js';

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
    getInitialState: function() {
        return {
          serialization: ''
        };
    },
    _onChange: function(){
        var self = this;
        var form = this.refs.crdsForm.getDOMNode();
        var $form = $(form);
        var data = serialize(form, { hash: true });
        data.response = CRDSConvertor.convert(data);
        console.log("in updateSerialization");
        console.log(JSON.stringify(data,null,'\t'));
        
        this.setState({
          serialization: data,
          response: data.response
        });
        return data;                
    },
    onSubmit: function(event) {             
        event.preventDefault();
        var data = this._onChange();
        this.props.saveValues('crds',data);
        this.props.nextStep();        
    },
    componentDidMount: function(){
        this._onChange();
    },
    render: function() {
        var inputProps = {
            type:'text',
            className: 'vx_form-control',
            style: STYLES.input
        };
        var serialization = JSON.stringify(this.state.response, null, 2);
        return (            
            <form ref="crdsForm" onSubmit={this.onSubmit}>
                <div id="taskContainer" >
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <center><h1>Configure Task</h1><br/></center>                 
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">                            
                            <Panel header='Level configuration' bsStyle="info">
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-6">
                                        <Input onChange={this._onChange} type="select" name="customerType" label="Customer type">
                                          <option value="PERSON_PARTY">PERSON_PARTY</option>
                                          <option value="BUSINESS_PARTY">BUSINESS_PARTY</option>
                                        </Input>                            
                                    </div>
                                    <div className="col-md-3"></div>
                                </div>

                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-6">
                                        <Input onChange={this._onChange} type="select" name="level" label="Level">
                                          <option value="CIP">CIP</option>
                                        </Input>                            
                                    </div>
                                    <div className="col-md-3"></div>
                                </div>

                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-6">
                                        <Input onChange={this._onChange} type="select" name="customerRole" label="Customer role">
                                          <option value="PAYPAL_PRIMARY_USER">PAYPAL_PRIMARY_USER</option>
                                          <option value="DIRECTOR">DIRECTOR</option>
                                          <option value="BENEFICIAL_OWNER">BENEFICIAL_OWNER</option>
                                        </Input>                            
                                    </div>
                                    <div className="col-md-3"></div>
                                </div>
                            </Panel>
                            <Panel header='Criteria configuration' bsStyle="info">                        
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-6">
                                        <Input onChange={this._onChange} type="select" name="criteria" label="Criteria">
                                          <option value="THIRD_PARTY_VERIFICATION">THIRD_PARTY_VERIFICATION</option>
                                          <option value="PROOF_OF_TAX_ID">PROOF_OF_TAX_ID</option>
                                        </Input>                            
                                    </div>
                                    <div className="col-md-3"></div>
                                </div>
                            </Panel>
                            <div className="row">
                                <div className="col-md-6">
                                    <Button onClick={this.props.prevStep} bsStyle="primary" bsSize="large" block>Previous</Button>
                                </div>
                                <div className="col-md-6">
                                    <Button type='submit' bsStyle="primary" bsSize="large" block>Next</Button>
                                </div>
                            </div>                            
                        </div>
                        <div className="col-md-5" >
                            <pre>
                                {serialization}                                
                            </pre>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
                </form>
                      
        );
    }
});
