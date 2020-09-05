import React, { Component } from 'react';

import Modal from '../../Components/UI/Modal/Modal';
import Aux from '../_Aux/_Aux';
// import Axios from 'axios';

const withErrorHandler = ( WrappedComponent, axios) => {
	return class extends Component {
		state = {
			error: null
		}
		constructor(props) {
			super(props);
			this.reqInterceptor = axios.interceptors.request.use(req => {
				// clearing any previous errors
				this.setState({ error: null });
				return req;
			})
			this.resInterceptor = axios.interceptors.response.use(res => res, error => {
				this.setState({error: error});
			})
		}
		componentWillUnmount() {
			console.log('will unmount', this.reqInterceptor, this.resInterceptor);
			axios.interceptors.request.eject(this.reqInterceptor)
			axios.interceptors.response.eject(this.resInterceptor)
		}
		// componentDidMount() {
		// 	axios.interceptors.request.use(req => {
		// 		// clearing any previous errors
		// 		this.setState({ error: null });
		// 		return req;
		// 	})
		// 	axios.interceptors.response.use(res => res, error => {
		// 		this.setState({error: error});
		// 	})
		// }
		errorConfirmedHandler =() => {
			this.setState({ error:null })
		}
		render() {
			return (
				<Aux>
					<Modal 
						show={this.state.error}
						modalClosed={this.errorConfirmedHandler}>
						{ this.state.error ? this.state.error.message : null }
					</Modal>
					<WrappedComponent {...this.props} />
				</Aux>
			);
		}
	}
}

/* 
	// TODO practice using react hooks instead of class
	const withErrorHandler = ( WrappedComponent, axios) => {
	return (props) => {
		return (
			<Aux>
				<Modal show>Something went wrong!:(</Modal>
				<WrappedComponent {...props} />
			</Aux>
		);
	}
}
*/

export default withErrorHandler;
