const express = require('express');
const app = express();
const $ = require('jquery');
const _ = require('underscore');
const bodyParser = require('body-parser');

var dataStorage = []

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());
app.use(express.static('client'))

app.post('/', (req, res) => {
	console.log('params ||', req.body);
	var data = JSON.parse(req.body.params)
	var results = parseJson(data);


	if (req.body.query[0] === 'No Filter') {
		res.send(JSON.stringify(clientFormating(results)));
	} else {
		var filteredData = filterData(results, req.body.query);
		res.send(JSON.stringify(clientFormating(filteredData)));
	}


});

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Listening on Localhost:3000!'));

var mockData = {
    "firstName": "Joshie",
    "lastName": "Wyattson",
    "county": "San Mateo",
    "city": "San Mateo",
    "role": "Broker",
    "sales": 1000000,
    "children": [{
      "firstName": "Beth Jr.",
      "lastName": "Johnson",
      "county": "San Mateo",
      "city": "Pacifica",
      "role": "Manager",
      "sales": 2900000,
      "children": [
        {
          "firstName": "Smitty",
          "lastName": "Won",
          "county": "San Mateo",
          "city": "Redwood City",
          "role": "Sales Person",
          "sales": 4800000,
          "children": []
        },
        {
          "firstName": "Allen",
          "lastName": "Price",
          "county": "San Mateo",
          "city": "Burlingame",
          "role": "Sales Person",
          "sales": 2500000,
          "children": []
        }
      ]},
      {
      "firstName": "Beth",
      "lastName": "Johnson",
      "county": "San Francisco",
      "city": "San Francisco",
      "role": "Broker/Sales Person",
      "sales": 7500000,
      "children": []}
      ]
};

// returns an array of obj, each object is a line entry for the CSV report
var parseJson = (data) => {
	var results = [];

	var buildEntry = (obj) => {
		var fields = Object.entries(obj);
		var entry = {};
		fields.forEach(touple => {
			if (touple[0] !== 'children') {
				entry[touple[0]] = touple[1];
			}
		});

		results.push(entry);
		if (obj.children.length > 0) {
			obj.children.forEach(child => buildEntry(child));
		}
	}

	buildEntry(data);

	dataStorage.push(...results);
	console.log(dataStorage);
	return results;
}


// compile all data into a comma separated string with each entry on a new line
var clientFormating = (results) => {
	var line = '';
	
	
	var csvIt = (obj) => {
		var desiredFields = ['firstName', 'lastName', 'county', 'city' ,'role', 'sales']

		desiredFields.forEach((key) => {
			if (obj[key]) {
				line += obj[key]
			} else {
				line += 'null'
			} 

			if (key === 'sales') {
				line += '\n';
			} else {
				line += ',';
			}
		});
	}

	results.forEach((entry, index) => {
		line += index + ' - ';
		csvIt(entry)
	});

// this line result is what is sent back to the client on Post
	return line;
}

var filterData = (data, query) => {
	console.log(data);
	var filtered = [];
	data.forEach(entry => {
		if (entry[query[0]] === query[1]) {
			filtered.push(entry);
		}
	});
	
	return filtered;
}






