
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
	var dataSet = Object.entries(props.data);
	var firstData = dataSet.slice(0, 3);
	var secondData = dataSet.slice(3, 10);
	var thirdData = dataSet.slice(10);
	var first = firstData.map(function (pair, index) {
		if (Array.isArray(pair[0])) {
			var temp = pair[0][1];
			pair[0] = temp;
		}
		return React.createElement(
			"p",
			{ className: "key" },
			" ",
			pair[0],
			" ",
			React.createElement(
				"span",
				{ className: "value" },
				" ",
				pair[1]
			)
		);
	});
	var second = secondData.map(function (pair, index) {
		if (Array.isArray(pair[0])) {
			var temp = pair[0][1];
			pair[0] = temp;
		}
		return React.createElement(
			"p",
			{ className: "key" },
			" ",
			pair[0],
			" ",
			React.createElement(
				"span",
				{ className: "value" },
				" ",
				pair[1]
			)
		);
	});
	var third = thirdData.map(function (pair, index) {
		if (Array.isArray(pair[0])) {
			var temp = pair[0][1];
			pair[0] = temp;
		}
		return React.createElement(
			"p",
			{ className: "key" },
			" ",
			pair[0],
			" ",
			React.createElement(
				"span",
				{ className: "value" },
				" ",
				pair[1]
			)
		);
	});

	return React.createElement(
		"div",
		null,
		React.createElement(
			"h4",
			null,
			"Please Confirm the Following Information"
		),
		first,
		React.createElement(
			"button",
			null,
			"Edit"
		),
		second,
		React.createElement(
			"button",
			null,
			"Edit"
		),
		third,
		React.createElement(
			"button",
			null,
			"Edit"
		)
	);
}