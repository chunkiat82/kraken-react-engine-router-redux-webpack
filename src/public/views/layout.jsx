/* global __DEVELOPMENT__:true */
import React from 'react';
import Header from './header.jsx';
import PageSlider from 'react-page-slider';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActions from '../../actions/counter';

import DevTools from '../../containers/DevTools';

class Layout extends React.Component {

	constructor(){
		super();
		this.renderDevTools = this.renderDevTools.bind(this);
	}

	renderDevTools(){
		if (__DEVELOPMENT__) {
			return (<DevTools />);
		}
		return '';
	}

	render() {
		const { step,fieldName, getValues, increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
		
		const centered = {
	      position: 'absolute',
	      top: '50%',
	      left: '50%',
	      transform: 'translate(-50%, -50%)'
	    };
	    
		return (
			<html>
				<head>
					<meta charSet='utf-8' />
					<title>
						{this.props.title}						
					</title>
					<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"/>
				</head>	
				<body>					
					<Header/>
					<div className="vx_foreground-container">
						<div className="vx_mainContent">
							{this.props.children}
						</div>
					</div>					
					<PageSlider show={counter==2} close={increment}>
						<div style={centered}>
							{'Click on \'close\' to dismiss this overlay'}
						</div>
					</PageSlider>
					{this.renderDevTools()}
				  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
				  	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
				  	<script src='/bundle.js'></script>
				</body>		  				 
			</html>
		);
	}
};

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

