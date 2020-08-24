import React from 'react';

import classes from './NavigationItems.module.css';
import NavLink from './NavLink/NavLink';

const navigationItems = () => {
	return (
		<ul className={classes.NavigationItems}>
			<NavLink link="/" active>Burger Builder</NavLink>
			<NavLink link="/checkout">Orders</NavLink>
		</ul>
	);
}
 
export default navigationItems;