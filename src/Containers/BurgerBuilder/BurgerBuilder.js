import React, { Component } from 'react';

import Aux from '../../HOC/_Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
	salad: 0.7,
	meat: 1.6,
	cheese: 2.1,
	bacon: 1.4
}

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			meat: 0,
			cheese: 0,
			bacon: 0
		},
		totalPrice: 4.50
	}
	addIngredientHandler = (type) => {
		const oldCount =  this.state.ingredients[type];
		const updatedCount = oldCount + 1
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({ ingredients: updatedIngredients, totalPrice:newPrice });
	}
	removeIngredientHandler = (type) => {
		const oldCount =  this.state.ingredients[type];
		if(oldCount <= 0) return;
		const updatedCount = oldCount - 1
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceDeletion = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeletion;
		this.setState({ ingredients: updatedIngredients, totalPrice:newPrice })
	}

	render() { 
		/** logic for disabling button in case of no ingredients */
		const disabledInfo = {
			...this.state.ingredients
		};
		for(let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0 
		}
		// console.log(disabledInfo)
		return ( 
			<Aux>
				<Burger ingredients={this.state.ingredients}/>
				<BuildControls 
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice}
				/>
			</Aux>
		);
	}
}
 
export default BurgerBuilder;