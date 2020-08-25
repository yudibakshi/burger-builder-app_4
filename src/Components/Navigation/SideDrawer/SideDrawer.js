import React from 'react';

import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Nav_Items/NavigationItems'
import Aux from '../../../HOC/_Aux/_Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';


// TODO put the nav element in the navigationItems component itself and adjust the styles css accordingly

const sideDrawer  = (props) => {
	let attchedClasses  = [classes.SideDrawer, classes.Close]
	if(props.open) attchedClasses = [classes.SideDrawer, classes.Open]
	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.close}/> 
			<div className={attchedClasses.join(' ')}> 
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav> 
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	);
}
 
export default sideDrawer ;