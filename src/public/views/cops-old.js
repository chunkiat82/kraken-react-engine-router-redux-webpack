'use strict';

var React = require('react'),
	Button = require('react-bootstrap').Button,
	Input = require('react-bootstrap').Input;
var Immutable = require('immutable');
var SerialForms = require('react-serial-forms');
var BasicForm = SerialForms.BasicForm;
var InputField = SerialForms.InputField;
var SelectField = SerialForms.SelectField;
var TextareaField = SerialForms.TextareaField;

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
		  serialization: '',
		  addedPeople: Immutable.List(),
		  undoCache: Immutable.List()
		};
	  },
	  onSubmit: function(event) {
		var self = this;
		console.log("in onSubmit");
		this.refs.myForm.validate(function(valid) {
		  if (valid) {
			self.setState({
			  serialization: self.refs.myForm.serialize()
			});
		  }
		});
		event.preventDefault();
	  },
	  updateSerialization: function() {
		var self = this;
		console.log("in updateSerialization");
		setTimeout(function() {
		  self.setState({
			serialization: self.refs.myForm.serialize()
		  });
		}, 0);
	  },
	  undo: function() {
		var self = this;
		this.setState(function(prev) {
		  return {
			undoCache: prev.undoCache.pop(),
			addedPeople: prev.undoCache.last()
		  }
		}, self.updateSerialization);
	  },
	  addNewfield: function() {
		var fieldIndex = this.state.addedPeople.size;
		var fieldKey = 'people[' + fieldIndex + ']';
		
		var fieldNameOptions = [
			{ text: 'PERSON_FULL_NAME' , value: 'PERSON_FULL_NAME' },
			{ text: 'DATE_OF_BIRTH' , value: 'DATE_OF_BIRTH' },
			{ text: 'CPF' , value: 'CPF' },
			{ text: 'HOME_ADDRESS' , value: 'HOME_ADDRESS' },
			{ text: 'HOME_PHONE_NUMBER' , value: 'HOME_PHONE_NUMBER' },
			{ text: 'OCCUPATION' , value: 'OCCUPATION' }
		];

		var inputTypeOptions = [
			{ text: 'UPLOADED_DOCUMENT' , value: 'UPLOADED_DOCUMENT' },
			{ text: 'INPUT_TEXT' , value: 'INPUT_TEXT' }
		];

		var constraintOptions = [
			{ text: 'ALL_OF' , value: 'ALL_OF' },
			{ text: 'ONE_OF' , value: 'ONE_OF' }
		];

		var accessModeOptions = [
			{ text: 'READ_ONLY' , value: 'READ_ONLY' },
			{ text: 'READ_WRITE' , value: 'READ_WRITE' }
		];
		var field = (
		  <div key={fieldIndex} className='field'>
			<p>
				<label >Field Name*</label>
				<SelectField
					onChange={this.updateSerialization}
					options={fieldNameOptions}
					value='PERSON_FULL_NAME'
					name={fieldKey + '[fieldName]'}
					validation='required' />
			</p>
			<p>
				<label >Input Type*</label>
				<SelectField
					onChange={this.updateSerialization}
					options={inputTypeOptions}
					value='INPUT_TEXT'
					name={fieldKey + '[inputType]'}
					validation='required' />
			</p>

			<p>
				<label >Access Mode*</label>
				<SelectField
					onChange={this.updateSerialization}
					options={accessModeOptions}
					value='READ_WRITE'
					name={fieldKey + '[accessMode]'}
					validation='required' />
			</p>

			<p>
				<label >Constraint*</label>
				<SelectField
					onChange={this.updateSerialization}
					options={constraintOptions}
					value='ALL_OF'
					name={fieldKey + '[constraint]'}
					validation='required' />
			</p>
		  </div>
		);
		this.setState(function(prev) {
		  return {
			undoCache: prev.undoCache.push(this.state.addedPeople),
			addedPeople: prev.addedPeople.push(field)
		  };
		});
	  },
	  render: function() {
		var retryCountChoices = [
		  { text: '1', value: '1' },
		  { text: '2', value: '2' },
		  { text: '3', value: '3' }
		];

		var decisionCodeChoices = [
		  { text: 'NEED_MORE_DATA', value: 'NEED_MORE_DATA' },
		  { text: 'ALLOW', value: 'ALLOW' },
		  { text: 'DENY', value: 'DENY' }
		];

		var validationStatusChoices = [
		  { text: 'FAILED', value: 'VERIFICATION_FAILURE' },
		  { text: 'PASS', value: 'VERIFICATION_PASS' }
		];
		var attrs = {
		  onChange: this.updateSerialization
		};
		var serialization = JSON.stringify(this.state.serialization, null, 2);
		return (
		  <BasicForm ref='myForm' onKeyUp={this.onChange} onSubmit={this.onSubmit}>
			<div className='some-test-fields col-md-6'>

			  <h2>Add Data elements... </h2>
			  <button onClick={this.addNewfield} type='button'>Add a new field</button>
			  <button onClick={this.undo} type='button' disabled={!this.state.addedPeople.size}>Undo</button>
			  {this.state.addedPeople.map(function(field) {
				return field;
			  })}

			  <h2>Decision Info </h2>
			  <p>
				<label htmlFor='decision_code'>Decision Code*</label>
				<SelectField
					  {...attrs}
					  options={decisionCodeChoices}
					  id='decision_code'
					  name='Decision code'
					  onChange={this.updateSerialization}
					  validation='required'/>
			  </p>
			  <p>
				<label htmlFor='retry_count'>Retry count</label>
				<SelectField
					  {...attrs}
					  options={retryCountChoices}
					  id='retry_count'
					  onChange={this.updateSerialization}
					  name='Retry count'/>
			  </p>
			  <p>
				<label htmlFor='validation_status'>Validation Status</label>
				<SelectField
				  {...attrs}
				  options={validationStatusChoices}
				  id='validation_status'
				  name='validation_status'
				  onChange={this.updateSerialization}
				  validation='required'/>
			  </p>
			
			</div>
			<div className='serialization col-md-6'>
			  <pre>
				{serialization}
			  </pre>
			</div>
		  </BasicForm>
		);
	  }
	});
