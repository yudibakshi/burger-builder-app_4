import React, { Component } from 'react';

import classes from './Modal.module.css';
import Aux from '../../../HOC/_Aux/_Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		// return nextProps.show !== this.props.show;
		return nextProps.children !== this.props.children || nextProps.show !== this.props.show;
	}
	componentDidUpdate() {
		console.log('[Modal] componentDidUpdate');
	}

	render() {
		// console.log('[Modal.js] rendering...')
		return ( 
			// REVIEW
			<Aux>
				<Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
				<div
					style={{ //TODO add via css classes
						transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
						opacity: this.props.show ? '1' : '0'
					}} 
					className={classes.Modal}>
					{this.props.children}
				</div>
			</Aux>
		);
	}
}
 
export default Modal;