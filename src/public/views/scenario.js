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
            <div id="fieldsPane" onClick={ handleClick }>

                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h1> Please enter the Scenario name to start...</h1>                        

                    </div>
                    <div className="col-md-3"></div>
                </div>

                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">

                        <Input {...inputProps} placeholder='Scenario Name' />
                        
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
