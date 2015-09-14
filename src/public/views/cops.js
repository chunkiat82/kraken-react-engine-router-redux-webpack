'use strict';

var React = require('react'),
	Button = require('react-bootstrap').Button,
	Input = require('react-bootstrap').Input;
var Immutable = require('immutable');
var Panel = require('react-bootstrap').Panel;
import CopsFields from './copsFields';
import serialize from 'form-serialize';
import convert from '../copsConverter.js';

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
		  addedFields: Immutable.List(),
		  undoCache: Immutable.List(),
		  serializedVal: '',
		  copsResponseFormat:''
		};
	  },
	  undo: function() {
		var self = this;
		this.setState(function(prev) {
		  return {
			undoCache: prev.undoCache.pop(),
			addedFields: prev.undoCache.last()
		  }
		}, self.updateSerialization);
	  },
	  updateSerialization: function() {
		var self = this;
		console.log("in updateSerialization");
		var form = this.refs.myCopsForm.getDOMNode();
        var $form = $(form);
        var data = serialize(form, { hash: true });
		console.log(JSON.stringify(data,null,'\t'));
		self.serializedVal = data;
		self.copsResponseFormat = convert(data);
	  },

	  onSubmit: function(event) {
		var self = this;
		console.log("in onSubmit");		
		event.preventDefault();
		var form = this.refs.myCopsForm.getDOMNode();
        var $form = $(form);
        var data = serialize(form, { hash: true });

        this.setState({
        	serializedVal : data
		  }, self.updateSerialization);
        
        this.props.saveValues('cops',data);
        this.props.nextStep();
	  },
	  addNewfield: function() {
		var fieldIndex = this.state.addedFields.size;
		var fieldKey = 'fields[' + fieldIndex + ']';
		console.log("in addNewfield");
		console.log(fieldIndex);		
		var fieldEle = React.createElement(CopsFields, { key:fieldKey}, null);		
		this.setState(function(prev) {
		  return {
			undoCache: prev.undoCache.push(this.state.addedFields),
			addedFields: prev.addedFields.push(fieldEle)
		  };
		});
	  },

	  render: function() {
	  	var serializedVal = JSON.stringify(this.state.copsResponseFormat, null, 2);

		return (
		<form className="fieldsForm" onSubmit={this.onSubmit} ref='myCopsForm'>
		<div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5">
            	<div id="decisionInfoContainer" >	
	                <div className="row">
	                    <div className="col-md-1"></div>
	                    <div className="col-md-10">
	                        <h1></h1><br/>
	                        <Panel header='ADD DECISION DETAILS AND FIELDS...'>    
	                        	<div className="row">
				                    <div className="col-md-1"></div>
				                    <div className="col-md-10">

				                        <Input type="select" label="Decision code" placeholder="NEED_MORE_DATA" name="decisionCode">
				                          <option value="ALLOW">ALLOW</option>
				                          <option value="NEED_MORE_DATA">NEED_MORE_DATA</option>
				                          <option value="DENY">DENY</option>
				                        </Input>
				                        
				                    </div>
				                    <div className="col-md-1"></div>
				                </div>

				                <div className="row">
				                    <div className="col-md-1"></div>
				                    <div className="col-md-10">
				                        <Input type="select" label="Retry count" placeholder="select" name="retryCount">
				                          <option value="1">1</option>
				                          <option value="2">2</option>
				                          <option value="3">3</option>
				                        </Input>                        
				                    </div>
				                    <div className="col-md-1"></div>
				                </div>

				                <div className="row">
				                    <div className="col-md-1"></div>
				                    <div className="col-md-10">
				                        <Input type="select" label="Verification status" placeholder="select" name="verificationStatus">
				                          <option value="VERIFICATION_FAILURE">VERIFICATION_FAILURE</option>
				                          <option value="VERIFICATION_SUCCESS">VERIFICATION_SUCCESS</option>
				                        </Input>                        
				                    </div>
				                    <div className="col-md-1"></div>
				                </div>
	               
	                         </Panel>                
	                    </div>
	                    <div className="col-md-3"></div>
	                </div>
	                
	                
	            </div>

	            <div id="fieldsContainer">  
	                <div className="row">
	                    <div className="col-md-1"></div>
	                    <div className="col-md-10">
	                        <h1></h1><br/>
	                        <Panel header='Add Fields details'>  
				            	<div className="row">
				                    <div className="col-md-1"></div>
				                    <div className="col-md-10">
				                        <Button onClick={this.addNewfield} type='button'  bsSize="small">Add a new field</Button>
									  	<Button onClick={this.undo} type='button' disabled={!this.state.addedFields.size}  bsSize="small">Undo</Button>
									  	{this.state.addedFields.map(function(field) {
							                return field;
							            })}                   
				                    </div>
				                    <div className="col-md-1"></div>
				                </div>
				            	
				                <div className="row">
				                    <div className="col-md-1"></div>
				                    <div className="col-md-10">
				                        <Button type='submit' bsStyle="primary" bsSize="small" style={STYLES.nextBtn}>Next</Button>                        
				                    </div>
				                    <div className="col-md-1"></div>
				                </div>
				            </Panel>                
	                    </div>
	                    <div className="col-md-1"></div>
	                </div>                
	            </div>

            </div>
            <div className="col-md-5">
            	<div id="serializedValPane">
            		<pre>
                        {serializedVal}
                    </pre>
            	</div>

            </div>
            <div className="col-md-1"></div>
        </div>	

			
        </form>
		  
		);
	  }
	});
