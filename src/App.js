import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './HOC/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/Checkout/Checkout';
import Orders from './Containers/Orders/Orders';

import classes from './App.module.css';


class App extends Component {
	/* 
		state = {
			show: true
		}
		componentDidMount() {
			setTimeout(() => {
				this.setState({ show: false})
			},8000)
		}
	*/
  render() {
    return (
      <div className={classes.App}>
        <Layout>
					<Switch>
						<Route path='/orders' component={Orders} />
						<Route path="/checkout" component={Checkout} />
						<Route exact path="/" component={BurgerBuilder}/>
						<Route render={() => <h1>Page Not Found</h1>} />
					</Switch>
        </Layout>
      </div>
		);
	}
}
  

export default App;
