import React from 'react'
import Scenario from './scenario.jsx'
import Cops from './cops.jsx'
import Crds from './crds.jsx'
import Generate from './generate.jsx'
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap';
import Zip from '../zipUtil.js'

export default class Wizard extends React.Component {
    constructor() {
        super();        
        this.state = {step : 1}
        this.saveValues = this.saveValues.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.generate = this.generate.bind(this);
    }

    saveValues(stepName,fields) {
        var temp = {};
        temp[stepName]=fields;
        this.setState(temp, function(){
            console.log("State changed..........");
        });
    }    
 
    nextStep() {
        var self = this;     
        this.setState({
            step : self.state.step + 1
        })
        alert('setp');
    }

    prevStep() {
        var self = this;     
        this.setState({
            step : self.state.step - 1
        })
    }

    generate(){
        console.log("Generate scenario !!");
        Zip.archive(this.state);
    }

    render() {
        console.log(JSON.stringify(this.state));        
        switch(this.state.step) {
            case 1:
                return (<Scenario data={this.state.scenario || {}} prevStep={this.prevStep} nextStep={this.nextStep} saveValues={this.saveValues} />);
            case 2:
                return <Crds data={this.state.crds || {}}  prevStep={this.prevStep} nextStep={this.nextStep} saveValues={this.saveValues} />
            case 3:
                return <Cops data={this.state.cops || {}}  prevStep={this.prevStep} nextStep={this.nextStep} saveValues={this.saveValues} />
            default:
                return <Generate generate={this.generate}/>
        }
    }
}
 