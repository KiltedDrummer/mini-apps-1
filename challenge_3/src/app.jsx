var formFields = {
	'1': ['name', 'email', 'password'],
	'2': ['address line 1', 'address line 2', 'city', 'state', 'zip code','phone number'],
	'3': ['credit card #', 'expiration date', 'CVV', 'billing zip code'],
	review: ['edit', 'submit']
}

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			formNum: 1
		}
	}

	componentDidMount() {
		formInput(formFields[this.state.formNum])
	}

	render() {
		return (
			<div>
				<h1>Extreme Checkout Simulator</h1>
				<div id="formArea">
					<h4>Please Enter the Following Information</h4>
					<form id="theForm" action="localhost:3000" method="post">
					</form>
				</div>
			
			</div>
			)
	}

}

function formInput(fields) {

	var formBody = document.getElementById('theForm');

	Object.values(fields).forEach((entry) => {
		if (entry === 'email') {

				formBody.insertAdjacentHTML('beforeend', '<label htmlFor="email">Enter you email: </label>')
				formBody.insertAdjacentHTML('beforeend', '<input type="email" name="email" id="email">')
				formBody.insertAdjacentHTML('beforeend', '<br>')

		} else if (entry === 'phone number') {

				formBody.insertAdjacentHTML('beforeend', '<label htmlFor="phoneNumber">Enter you phone number: </label>')
				formBody.insertAdjacentHTML('beforeend', '<input type="tel" name="phone" id="phone">')
				formBody.insertAdjacentHTML('beforeend', '<br>')

		} else if (entry === 'password') {

				formBody.insertAdjacentHTML('beforeend', '<label htmlFor="password">Enter you password: </label>')
				formBody.insertAdjacentHTML('beforeend', '<input type="password" name="password" id="password">')
				formBody.insertAdjacentHTML('beforeend', '<br>')

		} else if (entry === 'expiration data') {

				formBody.insertAdjacentHTML('beforeend', '<label htmlFor="experationDate">Enter you experation date: </label>')
				formBody.insertAdjacentHTML('beforeend', '<input type="month" name="experationDate" id="experationDate">')
				formBody.insertAdjacentHTML('beforeend', '<br>')

		} else {

				formBody.insertAdjacentHTML('beforeend', `<label htmlFor=${ entry }>Enter your ${ entry }</label>`)
				formBody.insertAdjacentHTML('beforeend', '<input type="text" name="name" id="name">')
				formBody.insertAdjacentHTML('beforeend', '<br>')

		}
	});

	formBody.insertAdjacentHTML('beforeend', `<input type="submit" value="next"></input>`)

	// return builtForm;
}



const testForm1 = formInput(formFields.form1Data)
