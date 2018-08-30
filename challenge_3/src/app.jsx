
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentForm: 1,
			completed: false,
			data: {}
		}
	}

	nextForm() {
		// handle form Data
		if (this.state.currentForm < 4) {
			const formData = parseData(this.state.currentForm);
			const oldData = this.state.data;
			Object.assign(oldData, formData)
			this.setState ({
					data: oldData
				})
		}


		// function to call on button click that sets state to next correct value
		if (!this.state.completed) {
			if (this.state.currentForm < 4) {
				const newState = this.state.currentForm + 1
				this.setState({
					currentForm: newState
				});
			} else {
				this.setState({
					currentForm: 1
				});
			}
		} else {
			this.setState({
				currentForm: 4
			});
		}
	}

	render() {
		return (
			<div>
				<h1>Extreme Checkout Simulator</h1>
				<div id="formArea">
					<h4>Please Enter the Following Information</h4>
					<FormBuilder 
					current={this.state.currentForm} 
					data={this.state.data}
					nextClick={this.nextForm.bind(this)}
					/>
					
				</div>
			
			</div>
			)
	}

}

// console.log(document.getElementById('appRender'))

ReactDOM.render(<App />, document.getElementById('appRender'));
