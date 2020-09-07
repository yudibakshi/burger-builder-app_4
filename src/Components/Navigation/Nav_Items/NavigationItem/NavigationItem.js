import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const navLink = (props) => {
	return ( 
		<li className={classes.NavLink}>
			{/* <a 
				href={props.link} 
				className={props.active ? classes.active : null}>
				{props.children}
			</a> */}
			<NavLink exact
				to={props.link}
				activeClassName={classes.active}>
				{props.children}
			</NavLink>
		</li>
	);
}
 
export default navLink;