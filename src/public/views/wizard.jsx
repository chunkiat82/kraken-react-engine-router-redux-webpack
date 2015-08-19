import React from 'react'
import Scenario from './scenario.jsx'
import HelloWorld from './helloWorld.jsx'
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap';

export default class Wizard extends React.Component {
    constructor() {
        super();        
        this.state = {step : 1}
        this.saveValues = this.saveValues.bind(this);
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
                return (<Scenario key="1" fieldName="firstName" prevStep={this.prevStep} nextStep={this.nextStep} saveValues={this.saveValues} />);
            case 2:
                return (<Scenario key="2" fieldName="lastName" prevStep={this.prevStep} nextStep={this.nextStep} saveValues={this.saveValues} />);
            default:
                return <HelloWorld key="others" firstName={this.state.firstName} lastName={this.state.lastName}/>
        }
    }
}
 