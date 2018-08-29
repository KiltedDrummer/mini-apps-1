const express = require('express');
const app = express();
const $ = require('jquery');
// const bodyParser = require('body-parser');


app.use(express.static('../challenge_3'))

// app.use(bodyParser.json());
// app.post('/', (req, res) => {
// 	console.log('params ||', req.body.params);
// 	var data = JSON.parse(req.body.params)
// 	var results = parseData(data);


// 	if (req.body.query[0] === 'No Filter') {
// 		res.status(202).send(JSON.stringify(clientFormating(results)));
// 	} else {
// 		var filteredData = filterData(results, req.body.query);
// 		res.status(202).send(JSON.stringify(clientFormating(filteredData)));
// 	}


// });

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Listening on Localhost:3000!'));
