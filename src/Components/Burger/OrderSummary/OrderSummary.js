import React from 'react';

import Aux from '../../../HOC/_Aux';

const orderSummary = (props) => {
	/** transforming Object ingredients into Array to map out the ingredient summary  */
	const ingredientSummary = Object.keys(props.ingredients)
		.map(igKey => (
			<li key={igKey}>
				<span 
					style={{ textTransform:'capitalize' }}>
					{igKey}
				</span>: {props.ingredients[igKey]}
			</li> 
		));
		// console.log(ingredientSummary)

	return (
		<Aux>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p>Continue to checkout ?</p>
		</Aux>
	);
}
 
export default orderSummary;