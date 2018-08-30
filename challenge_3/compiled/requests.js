

// post request here

parseData = function parseData(num) {
	console.log('here', formFields[num]);
	var data = {};
	var fields = formFields[num];
	fields.forEach(function (field) {
		if (Array.isArray(field)) {
			var id = field[1];
		} else {
			var id = field;
		}
		data[id] = document.getElementById(id).value;
	});
	return data;
};