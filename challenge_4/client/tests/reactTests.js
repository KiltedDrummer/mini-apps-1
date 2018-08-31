import React from 'react';
import App from '../client/src/app.jsx';
// import renderer from 'react-test-renderer';

test('Should be a Win - horizontal', () => {
	const wrapper = shallow.create(<App />);

	wrapper.setState({
		matrix: [
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				['red', 'red', 'red', 'red', 0, 0, 0]
			]
		});

	wrapper.state().gameStatus.to.equal(true);
});

test('Should be a Win - column', () => {
	const wrapper = shallow.create(<App />);

	wrapper.setState({
		matrix: [
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				['red', 0, 0, 0, 0, 0, 0],
				['red', 0, 0, 0, 0, 0, 0],
				['red', 0, 0, 0, 0, 0, 0],
				['red', 0, 0, 0, 0, 0, 0]
			]
		});

	wrapper.state().gameStatus.to.equal(true);
});

test('Should be a Win - Major Diagonal', () => {
	const wrapper = shallow.create(<App />);

	wrapper.setState({
		matrix: [
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 'red', 0, 0, 0],
				[0, 0, 'red', 'black', 0, 0, 0],
				[0, 'red', 'black', 'red', 0, 0, 0],
				['red', 'black', 'black', 'red', 0, 0, 0]
			]
		});

	wrapper.state().gameStatus.to.equal(true);
});

test('Should be a Win - Minor Diagonal', () => {
	const wrapper = shallow.create(<App />);

	wrapper.setState({
		matrix: [
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 'red', 0, 0, 0],
				[0, 0, 0, 'red', 'red', 0, 0],
				[0, 0, 0, 'black', 'red', 'red', 0],
				[0, 0, 0, 'red', 'black', 'black', 'red']
			]
		});

	wrapper.state().gameStatus.to.equal(true);
});