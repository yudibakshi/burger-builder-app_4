import React from 'react';

import classes from './Modal.module.css';
import Aux from '../../../HOC/_Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
	return ( 
		// REVIEW
	<Aux>
		<Backdrop show={props.show} clicked={props.modalClosed}/>
		<div
			style={{ //TODO add via css classes
				transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
				opacity: props.show ? '1' : '0'
			}} 
			className={classes.Modal}>
			{props.children}
		</div>
	</Aux>
	);
}
 
export default modal;