import React, { useState } from "react";
import Nav from "./Nav";
import PigPen from "./PigPen";
import hogs from "../porkers_data";

function App() {

	// filtering hogs until ln 21
	const [showgreased, setShowGreased] = useState(false)

	function toggleGreased() {
		setShowGreased((showgreased) => !showgreased)
	}

	const hogFilter = () => {
		if (showgreased === true) {
			return hogs.filter(hogObj => hogObj.greased)
		} else {
			return hogs
		}
	}
	// sorting hogs until ln

	const [sort, setSort] = useState('')

	const toggleSort = e => {
		setSort(e.target.value)
	}

	const byNameOrWeight = (hogObjA, hogObjB) => {
		switch (sort) {
			case 'name':
				if (hogObjA.name < hogObjB.name) {
					return -1
				} else {
					return 1
				}
			case 'largest to smallest':
				return hogObjB.weight - hogObjA.weight
			case 'smallest to largest':
				return hogObjA.weight - hogObjB.weight
			default:
				return 0
		}
	}

	const filteredHogs = [...hogFilter()].sort(byNameOrWeight)

	return (
		<div className="App">
			<Nav toggleGreased={toggleGreased} toggleSort={toggleSort} />
			<PigPen hogArray={filteredHogs} />
		</div>
	)
}

export default App;
