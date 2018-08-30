var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var formFields = {
	'1': ['name', 'email', 'password'],
	'2': [['address line 1', 'address_line_1'], ['address line 2', 'address_line_2'], 'city', 'state', ['zip code', 'zip_code'], ['phone number', 'phone_number']],
	'3': [['credit card #', 'credit_card_#'], ['expiration date', 'expiration_date'], 'CVV', ['billing zip code', 'billing_zip_code']],
	'4': ['edit', 'submit']
};

var FormBuilder = function (_React$Component) {
	_inherits(FormBuilder, _React$Component);

	function FormBuilder(props) {
		_classCallCheck(this, FormBuilder);

		return _possibleConstructorReturn(this, (FormBuilder.__proto__ || Object.getPrototypeOf(FormBuilder)).call(this, props));
	}

	_createClass(FormBuilder, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			formInput(formFields[this.props.current]);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			var box = document.getElementById('theForm');
			while (box.firstChild) {
				box.removeChild(box.firstChild);
			}

			if (this.props.current < 4) {
				formInput(formFields[this.props.current]);
			} else {
				ReactDOM.render(React.createElement(ConfirmData, { data: this.props.data }), document.getElementById('formArea'));
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement('form', { id: 'theForm', action: 'localhost:3000', method: 'post' }),
				React.createElement(NextButton, { onClick: this.props.nextClick })
			);
		}
	}]);

	return FormBuilder;
}(React.Component);

function formInput(fields) {

	var formBody = document.getElementById('theForm');

	if (fields[0] === 'edit') {
		formBody.insertAdjacentHTML('beforeend', '<h1>Final Form</h1>');
	} else {
		Object.values(fields).forEach(function (entry) {
			if (Array.isArray(entry)) {
				var key = entry[0];
				var id = entry[1];
			} else {
				var key = entry;
				var id = entry;
			}
			if (entry === 'email') {

				formBody.insertAdjacentHTML('beforeend', '<label htmlFor="email">Enter you email: </label>');
				formBody.insertAdjacentHTML('beforeend', '<input type="email" name="email" id="email">');
				formBody.insertAdjacentHTML('beforeend', '<br>');
			} else if (entry === 'phone number') {

				formBody.insertAdjacentHTML('beforeend', '<label htmlFor="phone_number">Enter you phone number: </label>');
				formBody.insertAdjacentHTML('beforeend', '<input type="tel" name="phone" id="phone">');
				formBody.insertAdjacentHTML('beforeend', '<br>');
			} else if (entry === 'password') {

				formBody.insertAdjacentHTML('beforeend', '<label htmlFor="password">Enter you password: </label>');
				formBody.insertAdjacentHTML('beforeend', '<input type="password" name="password" id="password">');
				formBody.insertAdjacentHTML('beforeend', '<br>');
			} else if (entry === 'expirationDate') {

				formBody.insertAdjacentHTML('beforeend', '<label htmlFor="expiration_date">Enter you experation date: </label>');
				formBody.insertAdjacentHTML('beforeend', '<input type="month" name="experation date" id="experation date">');
				formBody.insertAdjacentHTML('beforeend', '<br>');
			} else {

				formBody.insertAdjacentHTML('beforeend', '<label htmlFor=' + id + '>Enter your ' + key + '</label>');
				formBody.insertAdjacentHTML('beforeend', '<input type="text" name="name" id=' + id + '>');
				formBody.insertAdjacentHTML('beforeend', '<br>');
			}
		});
	}

	// formBody.insertAdjacentHTML('beforeend', `<input type="submit" value="next"></input>`)
	// formBody.insertAdjacentHTML('beforeend', `<button onclick=nextClick value="next">Next</button>`)

	// return builtForm;
}

// window.formBuilder = formBuilder;