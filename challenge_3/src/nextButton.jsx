class NextButton extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
				<button id="next" onClick={this.props.onClick}>Next Click Here</button>
			)
	}
}