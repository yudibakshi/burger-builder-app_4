import React from 'react';
// import { withRouter } from 'react-router-dom';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
	// console.log(props);
	// convert the props ingredients objet into an array so we could map burgerIngredient component
	let transformedIngredients = Object.keys(props.ingredients)
		.map(igKey => {
			return [...Array(props.ingredients[igKey])]
				.map((_, i) => <BurgerIngredient key={igKey+ i} type={igKey}/> )
		}) // flattening the array
		.reduce((arr,el) =>{
			return arr.concat(el);
		}, []);
		// console.log(transformedIngredients);
		if(transformedIngredients.length === 0) transformedIngredients = <p>Please add some ingredients</p>
	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top"/>
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom"/>
		</div>
	);
}
 
export default Burger;
// export default withRouter(Burger);