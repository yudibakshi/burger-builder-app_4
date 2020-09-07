import React, { Component } from 'react';
import axios from '../../../axios-orders'; // axios instance

import Button from '../../../Components/UI/Button/Button';
import Loader from '../../../Components/UI/Loader/Loader';
import classes from './ContactData.module.css'

class ConatctData extends Component {
	state = {
		name: '',
		email: '',
		address : {
			street: '',
			postalCode: ''
		},
		loading: false
	}
	orderHandler = (e) => {
		e.preventDefault();
		this.setState({ loading: true });
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
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
				this.setState({ loading: false });
				console.log(res);
				/** TODO implement a success message from server with transaction id for the cutstomer
					how do you access configure a reponse from a Firebase sent to the client 
					SERVER side should implementa code where you sent back the transaction data on successful order sent back to the client.
				*/ 
				/* Redirecting the user back to home page  */
				this.props.history.push('/');
			})
			.catch(error => {
				this.setState({ loading: false });
				console.log(error)
			});
	} 
	render() { 
		let renderedData = (
				<form>
					<input type="text" name="name" placeholder="Your Name" />
					<input type="email" name="email" placeholder="Your Email" />
					<input type="email" name="street" placeholder="Street" />
					<input type="text"  name="postal" placeholder="Postal Code" />
					<Button clicked={this.orderHandler} btnType="Success">Order</Button>
				</form>
		);
		if(this.state.loading) {
			renderedData = <Loader />
		}
		return (  
			<div className={classes.ContactData}>
				<h4>Enter your contact details</h4>
				{renderedData}
			</div>
		);
	}
}
 
export default ConatctData;

/** TODO
 1. sucessfull modal with backdrop, order sent message shown to 
 		the user with the transaction id and button which upon clicks directs the user, 
		and/or automatically directs it after 5 seconds.
	2. NOTE managing state with xState loading, sent, or error with modal with XSTATE 
 */