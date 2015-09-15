'use strict';

var React = require('react'),
	Button = require('react-bootstrap').Button,
	Input = require('react-bootstrap').Input;
var Immutable = require('immutable');
var Panel = require('react-bootstrap').Panel;
import CopsFields from './copsFields';
import serialize from 'form-serialize';
import copsConverter from '../copsConverter.js';

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
		  serialization: '',
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
		}, self._onChange);
	},
	_onChange: function(){
		var self = this;
		var form = this.refs.myCopsForm.getDOMNode();
		var $form = $(form);
		var data = serialize(form, { hash: true });
		data.response = copsConverter.convert(data);
		console.log("in _onChange");
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
	addNewfield: function() {
		var fieldIndex = this.state.addedFields.size;
		var fieldKey = 'fields[' + fieldIndex + ']';
		console.log("in addNewfield");
		console.log(fieldIndex);		
		var fieldEle = React.createElement(CopsFields, { key:fieldKey, fieldKey:fieldKey , _onChange:this._onChange}, null);		
		this.setState(function(prev) {			
			var form = this.refs.myCopsForm.getDOMNode();
			var $form = $(form);
			var data = serialize(form, { hash: true });
			data.response = copsConverter.convert(data);
		  	return {
				undoCache: prev.undoCache.push(this.state.addedFields),
				addedFields: prev.addedFields.push(fieldEle),
				response: data.response
		  	};
		});
	},
	componentDidMount: function(){
        this._onChange();
    },
	render: function() {
		var serialization = JSON.stringify(this.state.serialization.response, null, 2);

		return (
		<form className="fieldsForm" onSubmit={this.onSubmit} ref='myCopsForm'>
		<div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <center><h1>Configure Elements</h1><br/></center>
            </div>
            <div className="col-md-3"></div>
        </div>
		<div className="row">

			<div className="col-md-1"></div>
			<div className="col-md-5">
				<Panel header='Define decision details'>    
					<div className="row">
						<div className="col-md-1"></div>
						<div className="col-md-10">

							<Input onChange={this._onChange} type="select" label="Decision code" placeholder="NEED_MORE_DATA" name="decisionCode">
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
							<Input onChange={this._onChange} type="select" label="Retry count" placeholder="select" name="retryCount">
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
							<Input onChange={this._onChange} type="select" label="Verification status" placeholder="select" name="verificationStatus">
							  <option value="VERIFICATION_FAILURE">VERIFICATION_FAILURE</option>
							  <option value="VERIFICATION_SUCCESS">VERIFICATION_SUCCESS</option>
							</Input>                        
						</div>
						<div className="col-md-1"></div>
					</div>
	   
				 </Panel>                
				
				<Panel header='Define field elements'>  
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
												
				</Panel>                
					
				<div className="row">
                    <div className="col-md-6">
                        <Button onClick={this.props.prevStep} bsStyle="primary" bsSize="large" block>Previous</Button>
                    </div>
                    <div className="col-md-6">
                        <Button type='submit' bsStyle="primary" bsSize="large" block>Generate Scenario</Button>
                    </div>
                </div> 

			</div>
			<div className="col-md-5">
				<div id="serializationPane">
					<pre>
						{serialization}
					</pre>
				</div>

			</div>
			<div className="col-md-1"></div>
		</div>

		</form>
		  
		);
	  }
	});
