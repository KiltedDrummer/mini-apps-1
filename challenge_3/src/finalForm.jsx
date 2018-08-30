
// class ConfirmData extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.dataSet = Object.entries(this.props.data);
// 		this.information = (
// 				<div>
// 					{ this.dataSet.map(pair => {
// 						<p class="key"> {pair[0]} <span class="value"> {pair[1]}</span></p> 
// 					}) }
// 				</div>
// 				)
// 	}

// 	// information() {
// 	// 	<div>
// 	// 		{ dataSet.map(pair => {
// 	// 			<p class="key"> {pair[0]} <span class="value"> {pair[1]}</span></p> 
// 	// 		}) }
// 	// 	</div>
// 	// 	}


// 	render() {
// 		console.log('INFO', this.information);
// 		return (
// 			<div>
// 				<h4>Please Confirm the Following Information</h4>
// 				{ this.information }
// 			</div>
// 		)
// 	}
// }

function ConfirmData(props) {
	const dataSet = Object.entries(props.data);
	const firstData = dataSet.slice(0,3);
	const secondData = dataSet.slice(3,10);
	const thirdData = dataSet.slice(10);
	const first = (
			firstData.map((pair, index) => {
							if (Array.isArray(pair[0])) {
								let temp = pair[0][1]
								pair[0] = temp;
							}
							return <p className="key"> {pair[0]} <span className="value"> {pair[1]}</span></p> 
						})
	);
	const second = (
			secondData.map((pair, index) => {
							if (Array.isArray(pair[0])) {
								let temp = pair[0][1]
								pair[0] = temp;
							}
							return <p className="key"> {pair[0]} <span className="value"> {pair[1]}</span></p> 
						})
	);
	const third = (
			thirdData.map((pair, index) => {
							if (Array.isArray(pair[0])) {
								let temp = pair[0][1]
								pair[0] = temp;
							}
							return <p className="key"> {pair[0]} <span className="value"> {pair[1]}</span></p> 
						})
	);

	return (
		<div>
				<h4>Please Confirm the Following Information</h4>
				{ first }
				<button>Edit</button>
				{ second }
				<button>Edit</button>
				{ third }
				<button>Edit</button>
			</div>
	)
}

