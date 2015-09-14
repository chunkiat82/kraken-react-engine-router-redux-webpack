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
        console.log("in updateSerialization");
        console.log(JSON.stringify(data,null,'\t'));
    },
    onSubmit: function(event) {
        var self = this;
        console.log("in onSubmit");     
        event.preventDefault();
        var form = this.refs.crdsForm.getDOMNode();
        var $form = $(form);
        var data = serialize(form, { hash: true });
        console.log("in onSubmit");
        console.log(JSON.stringify(data,null,"\t"));        
        this.setState({
          serialization: data
        },this.updateSerialization);
    },
    render: function() {
        var inputProps = {
            type:'text',
            className: 'vx_form-control',
            style: STYLES.input
        };

        return (
            <div id="taskContainer" >
                <form ref="crdsForm" onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h1>Please configure your task..</h1><br/>
                            <h3>Level config</h3>                      
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <Input type="select" name="customerType" label="Customer type">
                              <option value="person_party">PERSON_PARTY</option>
                              <option value="business_party">BUSINESS_PARTY</option>
                            </Input>                            
                        </div>
                        <div className="col-md-3"></div>
                    </div>

                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <Input type="select" name="level" label="Level">
                              <option value="cip">CIP</option>
                            </Input>                            
                        </div>
                        <div className="col-md-3"></div>
                    </div>

                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <Input type="select" name="customerRole" label="Customer role">
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
                            <h3>Criteria config</h3>                     
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <Input type="select" name="criteria" label="Criteria">
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
