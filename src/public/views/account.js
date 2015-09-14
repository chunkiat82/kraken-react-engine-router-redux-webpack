'use strict';

var Layout = require('./layout.js');
var React = require('react'),
    Input = require('react-bootstrap').Input;


var STYLES = {
    input:{
        marginTop:'1em'
    }
};

module.exports = React.createClass({

    render: function() {
         var inputProps = {
                type:'text',
                className: 'vx_form-control',
                style: STYLES.input
            };
        return (
            <Layout {...this.props}>
                <div id='index'>
                    <Input {...inputProps} placeholder='Scenario Name' />
                    <h1> hi </h1>
                </div>
            </Layout>
        );
    }
});
