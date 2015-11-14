'use strict';

import React from 'react'
import Scenario from './scenario.jsx'
import HelloWorld from './helloWorld.jsx'
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap';

class Wizard extends React.Component {
    constructor() {
        super();        
        this.state = {step : 1}
        this.saveValues = this.saveValues.bind(this);
        this.getValues = this.getValues.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);    
    }

    saveValues(field,value) {
        var temp = {};
        temp[field]=value;
        this.setState(temp,function(){
            console.log(JSON.stringify(this.state));
        });
    }

    getValues(field){
        return this.state[field];
    }
 
    nextStep() {
        var self = this;     
        this.setState({
            step : self.state.step + 1
        })              
    }

    prevStep() {
        var self = this;     
        this.setState({
            step : self.state.step - 1
        })
    }


    render() {                
        switch(this.state.step) {
            case 1:
                //this can be refactored to another component... later :)                      
                return (<Scenario {...this.props} key="1" step={this.state.step} fieldName="firstName" prevStep={this.prevStep} nextStep={this.nextStep} saveValues={this.saveValues} getValues={this.getValues}/>);                          
            case 2:
                return (<Scenario {...this.props} key="2" step={this.state.step} fieldName="lastName" prevStep={this.prevStep} nextStep={this.nextStep} saveValues={this.saveValues} getValues={this.getValues}/>);
            default:
                return <HelloWorld key="others" firstName={this.state.firstName} lastName={this.state.lastName}/>
        }
    }
}
 
export default Wizard;