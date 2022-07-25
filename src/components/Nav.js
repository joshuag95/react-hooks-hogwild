import React, { useState } from "react";
import piggy from "../assets/porco.png";

const Nav = ({ toggleGreased, toggleSort}) => {



	return (
		<div className="navWrapper">

			<select onChange={toggleSort}>
				<option></option>
				<option value="name">Name</option>
				<option value="smallest to largest">Smallest to Largest</option>
				<option value="largest to smallest">Largest to Smallest</option>

			</select>

			<span className="headerText">HogWild</span>
			
			<div onClick={toggleGreased} className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
		</div>
	);
}

export default Nav;
