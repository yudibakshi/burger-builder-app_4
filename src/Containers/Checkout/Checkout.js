import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {
	state = { 
		ingredients: {
			salad: 0,
			meat: 0,
			bacon: 0,
			cheese: 0
		}, // {..}
		totalPrice: null
	}
	
	componentDidMount() { //REVIEW componentWillMount alternative to hooks in class based approach
	// UNSAFE_componentWillMount() {
		console.log('[Checkout] - DidMount', this.props);
		// console.log('[Checkout] - WillMount', this.props);
		const query = new URLSearchParams(this.props.location.search);
		// console.log(query);
		const ingredients = {};
		let price = 0;
		for(let param of query.entries() ) {
			// eg. ['salad', '2']
			if(param[0] === 'price') {
				price = +param[1];
			} else {
				ingredients[param[0]] = +param[1]
			}
		}
		// console.log(ingredients);
		this.setState({ingredients: ingredients , totalPrice: price })
	}

	checkoutCancelledHandler = () => {
		this.props.history.goBack();
	}

	checkoutContinuedHandler = () => {
		this.props.history.replace('/checkout/contact-data')
	}

	render() { 
		return (  
			<div>
				<CheckoutSummary 
					ingredients={this.state.ingredients}
					checkoutCancelled={this.checkoutCancelledHandler}	
					checkoutContinued={this.checkoutContinuedHandler}	
				/>
				{/* <Route path={this.props.match.url + '/contact-data'}  component={ContactData}/> */}
				<Route 
					path={this.props.match.url + '/contact-data'}  
					render={(props) => (
						<ContactData 
							ingredients={this.state.ingredients} 
							price={this.state.totalPrice}
							{...props}
						/> 
					)} 
				/>
			</div>
		);
	}
}
 
export default Checkout;