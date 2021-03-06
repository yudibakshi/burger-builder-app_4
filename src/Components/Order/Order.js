import React from 'react';

import classes from './Order.module.css';

const order = (props) => { 
	const ingredients = [];

	for(let ingredientName in props.ingredients) {
		ingredients.push({
			name: ingredientName, 
			amount: props.ingredients[ingredientName]
		});
	}
	const ingredientOutput = ingredients.map(ig => (
		<span 
			style={{
				textTransform:'capitalize', 
				border: '1px solid', 
				display:'inline-block', 
				margin:'3px 8px', 
				padding: '5px'
			}}
			key={ig.name}>
			{ig.name}({ig.amount}) 
		</span>
	));
	return (
		<div className={classes.Order}>
			<p>Ingredients: {ingredientOutput}</p>
			<p>Price: <strong>USD {props.price} </strong></p>
	</div>
	);
};

export default order;