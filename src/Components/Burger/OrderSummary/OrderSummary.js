import React, { Component } from 'react';

import Aux from '../../../HOC/_Aux/_Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
	componentDidUpdate() {
		console.log('[OrderSummary] componentDidUpdate');
	}

	render() {
		// console.log('[OrderSummary.js] rendering...')
		/** transforming Object ingredients into Array to map out the ingredient summary  */
		const ingredientSummary = Object.keys(this.props.ingredients)
		.map(igKey => (
			<li key={igKey}>
				<span 
					style={{ textTransform:'capitalize' }}>
					{igKey}
				</span>: {this.props.ingredients[igKey]}
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
				<p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
				<p>Continue to checkout ?</p>
				<Button btnType="Success" clicked={this.props.cancel}>Cancel</Button>
				<Button btnType="Danger" clicked={this.props.continue}>Continue</Button>
			</Aux>
		);
	}
}
 
export default OrderSummary;