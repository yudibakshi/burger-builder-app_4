import React from 'react';

import classes from './NavLink.module.css';

const navLink = (props) => {
	return ( 
		<li className={classes.NavLink}>
			<a 
				href={props.link} 
				className={props.active ? classes.active : null}>
				{props.children}
			</a>
		</li>
	);
}
 
export default navLink;