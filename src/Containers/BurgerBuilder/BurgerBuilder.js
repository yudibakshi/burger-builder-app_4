import React, { Component } from 'react';

import Aux from '../../HOC/_Aux/_Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders'; // axios instance
import Loader from '../../Components/UI/Loader/Loader';
import withErrorHandler from '../../HOC/withErrorHanlder/withErrorHandler';

const INGREDIENT_PRICES = {
	salad: 0.7,
	meat: 1.6,
	cheese: 2.1,
	bacon: 1.4
}

class BurgerBuilder extends Component {
	state = {
		ingredients: null,
		totalPrice: 4.50,
		orderButtonDisabled: true,
		orderButtonClicked: false, // purchasing
		loading: false,
		error:  false
	}

	componentDidMount() {
		axios.get('https://react-my-burger-7eff5.firebaseio.com/ingredients.json')
			.then(response => {
				this.setState({ ingredients: response.data })
				console.log(response.data);
			})
			.catch(error => {
				this.setState({ error: true })
			}); //REVIEW
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
		this.setState({ ingredients: updatedIngredients, totalPrice: +newPrice.toFixed(2) });
		
		this.updateOrderBtnState(updatedIngredients);
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
		this.setState({ ingredients: updatedIngredients, totalPrice: +newPrice.toFixed(2) });
		
		this.updateOrderBtnState(updatedIngredients);
	}
	updateOrderBtnState = (ingredients) => {
		/** setState - updated ingredients needd to check */
		const sum = Object.keys(ingredients)
			.map(igKey => {
				return ingredients[igKey];
			})
			.reduce((sum, el) => sum + el, 0);
			console.log(sum);
			this.setState({ orderButtonDisabled : sum <= 0 })
	}
	orderButtonClickHandler = () => {
		this.setState({ orderButtonClicked : true })
	}
	purchaseCancelHandler = () => {
		this.setState({ orderButtonClicked : false })
	}
	purchaseContinueHandler = () => {
		// alert('You Continued');
		this.setState({ loading: true });

		const order = {
			ingredients: this.state.ingredients,
			price: this.state.totalPrice,
			customer: {
				name: 'Yudi Bakshi',
				address: {
					street: 'testSreet 1',
					zipCode: 123244,
					country: 'India'
				},
				email: 'test@test.com'
			},
			deliveryMethod: 'fastest'
		}
		axios.post('/orders.json', order)
			.then(res => {
				this.setState({ loading: false, orderButtonClicked: false });
				console.log(res);
				/* TODO implement a success message from server with transaction id for the cutstomer
				NOTE how do you access configure a reponse from a Firebase sent to the client*/ 
			})
			.catch(error => {
				this.setState({ loading: false, orderButtonClicked: false });
				console.log(error)
			});
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
		let orderSummary = null;
	
		let burger = this.state.error ? <p style={{textAlign:'center'}}>Ingredients can't be loaded... :(</p> : <Loader />;
		if(this.state.ingredients) {
			burger = (
				<Aux>
					<Burger ingredients={this.state.ingredients}/>
					<BuildControls 
						ingredientAdded={this.addIngredientHandler}
						ingredientRemoved={this.removeIngredientHandler}
						disabled={disabledInfo}
						orderBtnState={this.state.orderButtonDisabled}
						price={this.state.totalPrice}
						orderBtnClicked={this.orderButtonClickHandler}
					/>
				</Aux>
			);
			orderSummary = (
				<OrderSummary 
					ingredients={this.state.ingredients}
					price={this.state.totalPrice} 
					cancel={this.purchaseCancelHandler}
					continue={this.purchaseContinueHandler} >
						{/* <Loader /> */}
					</OrderSummary>
			);
		}
		if(this.state.loading) {
			orderSummary = <Loader />
		}
		
		return ( 
			<Aux>
				<Modal show={this.state.orderButtonClicked} modalClosed={this.purchaseCancelHandler}>
					{orderSummary}
				</Modal>
				{burger}
			</Aux>
		);
	}
}
 
// export default BurgerBuilder;
// with global error handler
export default withErrorHandler(BurgerBuilder, axios);
