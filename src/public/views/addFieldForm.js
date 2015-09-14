'use strict';

var React = require('react'),
  Button = require('react-bootstrap').Button,
  Input = require('react-bootstrap').Input;

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
  handleSubmit: function(e) {
    e.preventDefault();
    var fieldName = React.findDOMNode(this.refs.fieldName).value.trim();
    var inputType = React.findDOMNode(this.refs.inputType).value.trim();
    if (!inputType || !fieldName) {
      return;
    }
    this.props.onFieldSubmit({fieldName: fieldName, inputType: inputType});
    React.findDOMNode(this.refs.fieldName).value = '';
    React.findDOMNode(this.refs.inputType).value = '';
  },
  render: function() {
    return (
      <form className="fieldForm" onSubmit={this.handleSubmit}>
        <input type="inputType" placeholder="Your name" ref="fieldName" />
        <input type="text" placeholder="Say something..." ref="inputType" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});