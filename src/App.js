import React, { Component } from 'react';

import Layout from './HOC/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';

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
      <div className="App">
        <Layout>
				<BurgerBuilder />
        </Layout>
      </div>
		);
	}
}
  

export default App;
