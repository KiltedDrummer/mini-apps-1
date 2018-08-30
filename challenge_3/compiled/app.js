var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			currentForm: 1,
			completed: false,
			data: {}
		};
		return _this;
	}

	_createClass(App, [{
		key: "nextForm",
		value: function nextForm() {
			// handle form Data
			if (this.state.currentForm < 4) {
				var formData = parseData(this.state.currentForm);
				var oldData = this.state.data;
				Object.assign(oldData, formData);
				this.setState({
					data: oldData
				});
			}

			// function to call on button click that sets state to next correct value
			if (!this.state.completed) {
				if (this.state.currentForm < 4) {
					var newState = this.state.currentForm + 1;
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
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"h1",
					null,
					"Extreme Checkout Simulator"
				),
				React.createElement(
					"div",
					{ id: "formArea" },
					React.createElement(
						"h4",
						null,
						"Please Enter the Following Information"
					),
					React.createElement(FormBuilder, {
						current: this.state.currentForm,
						data: this.state.data,
						nextClick: this.nextForm.bind(this)
					})
				)
			);
		}
	}]);

	return App;
}(React.Component);

// console.log(document.getElementById('appRender'))

ReactDOM.render(React.createElement(App, null), document.getElementById('appRender'));