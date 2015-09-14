'use strict';

var Layout = require('./layout.js');
var React = require('react'),
    Button = require('react-bootstrap').Button,
    Input = require('react-bootstrap').Input;
import serialize from 'form-serialize';
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
    getInitialState: function() {
        return {
          serialization: ''
        };
    },
    updateSerialization: function() {
        var self = this;
        console.log("in updateSerialization");
        var form = this.refs.crdsForm.getDOMNode();
        var $form = $(form);
        var data = serialize(form, { hash: true });
        console.log(JSON.stringify(data,null,'\t'));
    },
    onSubmit: function(event) {
        var self = this;
        console.log("in onSubmit");     
        event.preventDefault();
        var form = this.refs.crdsForm.getDOMNode();
        console.log(JSON.stringify(form,null,"\t"));  
        var $form = $(form);
        var data = serialize(form, { hash: true });        
        this.setState({
          serialization: data
        });
    },
    render: function() {
        var inputProps = {
            type:'text',
            className: 'vx_form-control',
            style: STYLES.input
        };

        function handleSubmit() {
          alert('Submit !!');
        }

        return (
            <div id="taskContainer" >
                <form ref="crdsForm" onSubmit={this.onSubmit}>
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

                            <Input type="select" id="customerType" name="customerType">
                              <option value="select">Select customer type</option>
                              <option value="person_party">PERSON_PARTY</option>
                              <option value="business_party">BUSINESS_PARTY</option>
                            </Input>
                            
                        </div>
                        <div className="col-md-3"></div>
                    </div>

                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">

                            <Input type="select" id="level" name="level">
                              <option value="select">Select level</option>
                              <option value="cip">CIP</option>
                            </Input>
                            
                        </div>
                        <div className="col-md-3"></div>
                    </div>

                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">

                            <Input type="select" id="customerRole" name="customerRole">
                              <option value="select">Select role</option>
                              <option value="paypal_primary_user">PAYPAL_PRIMARY_USER</option>
                              <option value="director">DIRECTOR</option>
                              <option value="beneficial_owner">BENEFICIAL_OWNER</option>
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

                            <Input type="select" id="criteria" name="criteria">
                              <option value="select">Select criteria</option>
                              <option value="third_party_verification">THIRD_PARTY_VERIFICATION</option>
                              <option value="proof_of_tax_id">PROOF_OF_TAX_ID</option>
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
                </form>
            </div>           
        );
    }
});
