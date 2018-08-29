var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var formFields = {
	'1': ['name', 'email', 'password'],
	'2': ['address line 1', 'address line 2', 'city', 'state', 'zip code', 'phone number'],
	'3': ['credit card #', 'expiration date', 'CVV', 'billing zip code'],
	review: ['edit', 'submit']
};

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			formNum: 1
		};
		return _this;
	}

	_createClass(App, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			formInput(formFields[this.state.formNum]);
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					'Extreme Checkout Simulator'
				),
				React.createElement(
					'div',
					{ id: 'formArea' },
					React.createElement(
						'h4',
						null,
						'Please Enter the Following Information'
					),
					React.createElement('form', { id: 'theForm', action: 'localhost:3000', method: 'post' })
				)
			);
		}
	}]);

	return App;
}(React.Component);

function formInput(fields) {

	var formBody = document.getElementById('theForm');

	Object.values(fields).forEach(function (entry) {
		if (entry === 'email') {

			formBody.insertAdjacentHTML('beforeend', '<label htmlFor="email">Enter you email: </label>');
			formBody.insertAdjacentHTML('beforeend', '<input type="email" name="email" id="email">');
			formBody.insertAdjacentHTML('beforeend', '<br>');
		} else if (entry === 'phone number') {

			formBody.insertAdjacentHTML('beforeend', '<label htmlFor="phoneNumber">Enter you phone number: </label>');
			formBody.insertAdjacentHTML('beforeend', '<input type="tel" name="phone" id="phone">');
			formBody.insertAdjacentHTML('beforeend', '<br>');
		} else if (entry === 'password') {

			formBody.insertAdjacentHTML('beforeend', '<label htmlFor="password">Enter you password: </label>');
			formBody.insertAdjacentHTML('beforeend', '<input type="password" name="password" id="password">');
			formBody.insertAdjacentHTML('beforeend', '<br>');
		} else if (entry === 'expiration data') {

			formBody.insertAdjacentHTML('beforeend', '<label htmlFor="experationDate">Enter you experation date: </label>');
			formBody.insertAdjacentHTML('beforeend', '<input type="month" name="experationDate" id="experationDate">');
			formBody.insertAdjacentHTML('beforeend', '<br>');
		} else {

			formBody.insertAdjacentHTML('beforeend', '<label htmlFor=' + entry + '>Enter your ' + entry + '</label>');
			formBody.insertAdjacentHTML('beforeend', '<input type="text" name="name" id="name">');
			formBody.insertAdjacentHTML('beforeend', '<br>');
		}
	});

	formBody.insertAdjacentHTML('beforeend', '<input type="submit" value="next"></input>');

	// return builtForm;
}

var testForm1 = formInput(formFields.form1Data);