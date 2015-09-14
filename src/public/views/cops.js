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
        var moods = [
          { text: 'Happy' , value: 'happy' },
          { text: 'Aloof' , value: 'aloof' }
        ];
        var field = (
          <div key={fieldIndex} className='field'>
            <p>
              <InputField
                onChange={this.updateSerialization}
                name={fieldKey + '[full_name]'}
                placeholder='Full Name'
                validation='required' />
            </p>
            <p>
              <SelectField
                onChange={this.updateSerialization}
                options={moods}
                value='happy'
                name={fieldKey + '[mood]'}
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
        var fruitChoices = [
          { text: '- Select Fruit -', value: '' },
          { text: 'Apple', value: 'apple' },
          { text: 'Grapefruit', value: 'grapefruit' }
        ];
        var vegeChoices = [
          { text: '- Select Vegetable -', value: '' },
          { text: 'Beans', value: 'bean' },
          { text: 'Avocado', value: 'avocado' }
        ];
        var attrs = {
          onChange: this.updateSerialization
        };
        var serialization = JSON.stringify(this.state.serialization, null, 2);
        return (
          <BasicForm ref='myForm' onKeyUp={this.onChange} onSubmit={this.onSubmit}>
            <div className='some-test-fields col-md-6'>

              <h2>People (Simple repeater demonstration)</h2>
              <button onClick={this.addNewfield} type='button'>Add a new field</button>
              <button onClick={this.undo} type='button' disabled={!this.state.addedPeople.size}>Undo</button>
              {this.state.addedPeople.map(function(field) {
                return field;
              })}

              <h2>General Information (Basic fields)</h2>
              <p>
                <label htmlFor='first_name'>First Name*</label>
                <InputField
                  {...attrs}
                  id='first_name'
                  placeholder='John'
                  name='First Name'
                  validation='required' />
              </p>
              <p>
                <label htmlFor='last_name'>Last Name*</label>
                <InputField
                  {...attrs}
                  placeholder='Doe'
                  id='last_name'
                  name='Last Name'
                  validation='required'/>
              </p>
              <p>
                <label htmlFor='fruit'>Fruits*</label>
                <SelectField
                  {...attrs}
                  options={fruitChoices}
                  id='fruit'
                  name='Fruit'
                  validation='required'/>
              </p>
              <p>
                <label htmlFor='vege'>Vegetables*</label>
                <SelectField
                  {...attrs}
                  multiple={true}
                  options={vegeChoices}
                  id='vege'
                  name='vege'
                  validation='required'/>
              </p>
              <p>
                <label htmlFor='about'>About</label>
                <TextareaField
                  {...attrs}
                  id='about'
                  name='about'/>
              </p>
              <div>
                <label>Radios</label>
              </div>
              <p className='inline'>
                <InputField
                  {...attrs}
                  type='radio'
                  value='radio-test-1'
                  name='radioexample'/>
                  <label>Radio 1</label>
                <InputField
                  {...attrs}
                  type='radio'
                  value='radio-test-2'
                  name='radioexample'/>
                  <label>Radio 2</label>
                <InputField
                  {...attrs}
                  type='radio'
                  value='radio-test-3'
                  name='radioexample'/>
                  <label>Radio 3</label>
                <InputField
                  {...attrs}
                  type='radio'
                  value='radio-test-4'
                  name='radioexample'/>
                  <label>Radio 4</label>
              </p>
              <div>
                <label>Checkboxes</label>
              </div>
              <p className='inline'>
                <InputField
                  {...attrs}
                  type='checkbox'
                  name='check-1'/>
                  <label>Checkbox 1</label>
                <InputField
                  {...attrs}
                  type='checkbox'
                  name='check-2'/>
                  <label>Checkbox 2</label>
                <InputField
                  {...attrs}
                  type='checkbox'
                  name='check-3'/>
                  <label>Checkbox 3</label>
                <InputField
                  {...attrs}
                  type='checkbox'
                  name='check-4'/>
                  <label>Checkbox 4</label>
              </p>
              <p>
                <label>File</label>
                <InputField
                  {...attrs}
                  type='file'
                  name='uploaded-file'/>
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
