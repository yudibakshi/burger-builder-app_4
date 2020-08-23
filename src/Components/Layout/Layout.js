import React from 'react';

import Aux from '../../HOC/_Aux';
import classes from './Layout.module.css';


const layout = (props) => {
	return (
		<Aux>
			<div>Toolbar, sidebar, backdrop</div>
			<main className={classes.Content}>
				{props.children}
			</main>
		</Aux>
	);
}

export default layout;


 