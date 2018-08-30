const formFields = {
	'1': ['name', 'email', 'password'],
	'2': [['address line 1', 'address_line_1'], ['address line 2', 'address_line_2'], 'city', 'state', ['zip code', 'zip_code'],['phone number', 'phone_number']],
	'3': [['credit card #', 'credit_card_#'], ['expiration date', 'expiration_date'], 'CVV', ['billing zip code', 'billing_zip_code']],
	'4': ['edit', 'submit']
}

class FormBuilder extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		formInput(formFields[this.props.current]);
	}

	componentDidUpdate() {
		const box = document.getElementById('theForm')
		while (box.firstChild) {
	    box.removeChild(box.firstChild);
		}

		if (this.props.current < 4) {
			formInput(formFields[this.props.current]);
		} else {
			ReactDOM.render(<ConfirmData data={this.props.data} />, document.getElementById('formArea'))
		}

	}

	render() {
		return (
			<div>
				<form id="theForm" action="localhost:3000" method="post">
				</form>
				<NextButton onClick={this.props.nextClick} />
			</div>
			)
	}
}


function formInput(fields) {

	var formBody = document.getElementById('theForm');

	if (fields[0] === 'edit') {
		formBody.insertAdjacentHTML('beforeend', '<h1>Final Form</h1>')

	} else {
		Object.values(fields).forEach((entry) => {
			if (Array.isArray(entry)) {
				var key = entry[0];
				var id = entry[1];
			} else {
				var key = entry;
				var id = entry;
			}
			if (entry === 'email') {

					formBody.insertAdjacentHTML('beforeend', '<label htmlFor="email">Enter you email: </label>')
					formBody.insertAdjacentHTML('beforeend', '<input type="email" name="email" id="email">')
					formBody.insertAdjacentHTML('beforeend', '<br>')

			} else if (entry === 'phone number') {

					formBody.insertAdjacentHTML('beforeend', '<label htmlFor="phone_number">Enter you phone number: </label>')
					formBody.insertAdjacentHTML('beforeend', '<input type="tel" name="phone" id="phone">')
					formBody.insertAdjacentHTML('beforeend', '<br>')

			} else if (entry === 'password') {

					formBody.insertAdjacentHTML('beforeend', '<label htmlFor="password">Enter you password: </label>')
					formBody.insertAdjacentHTML('beforeend', '<input type="password" name="password" id="password">')
					formBody.insertAdjacentHTML('beforeend', '<br>')

			} else if (entry === 'expirationDate') {

					formBody.insertAdjacentHTML('beforeend', '<label htmlFor="expiration_date">Enter you experation date: </label>')
					formBody.insertAdjacentHTML('beforeend', '<input type="month" name="experation date" id="experation date">')
					formBody.insertAdjacentHTML('beforeend', '<br>')

			} else {

					formBody.insertAdjacentHTML('beforeend', `<label htmlFor=${ id }>Enter your ${ key }</label>`)
					formBody.insertAdjacentHTML('beforeend', `<input type="text" name="name" id=${id}>`)
					formBody.insertAdjacentHTML('beforeend', '<br>')

			}
		});
	}


	// formBody.insertAdjacentHTML('beforeend', `<input type="submit" value="next"></input>`)
	// formBody.insertAdjacentHTML('beforeend', `<button onclick=nextClick value="next">Next</button>`)

	// return builtForm;
}

// window.formBuilder = formBuilder;