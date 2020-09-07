import React, { Component } from 'react';

import Order from '../../Components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../HOC/withErrorHanlder/withErrorHandler';

class Orders extends Component {
	state = {
		orders: [],
		loading: true
	}
	componentDidMount() {
		axios.get('/orders.json')
			.then(response => {
				// console.log(response.data);
				const fetchedOrders = []
				for(let key in response.data) {
					fetchedOrders.push({
						...response.data[key],
						id: key
					});
				}
				// console.log(fetchedOrders);
				this.setState({ loading: false, orders: fetchedOrders })
			})
			.catch(error => {
				this.setState({ loading: false })
				//REVIEW local error handling, rendering something to the user,how does that work
			})
	}
	render() { 
		return (  
			<div>
				{this.state.orders.map(order => (
					<Order {...order} key={order.id}/>
				))}
			</div>
		);
	}
}
 
export default withErrorHandler(Orders, axios);