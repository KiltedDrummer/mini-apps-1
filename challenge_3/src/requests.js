

// post request here

parseData = (num) => {
console.log('here', formFields[num])
	let data = {};
	const fields = formFields[num];
	fields.forEach(field => {
		if (Array.isArray(field)) {
				var id = field[1];
			} else {
				var id = field;
			}
		data[id] = document.getElementById(id).value
	});
	return data;
}