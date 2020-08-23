import React from 'react';

import Aux from '../../../HOC/_Aux';
import Button from '../../UI/Button/Button';

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
		/** TODO style the order summary component a bit more */
		<Aux>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
			<p>Continue to checkout ?</p>
			<Button btnType="Success" clicked={props.cancel}>Cancel</Button>
			<Button btnType="Danger" clicked={props.continue}>Continue</Button>
		</Aux>
	);
}
 
export default orderSummary;