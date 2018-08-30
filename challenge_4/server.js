const webpack = require('webpack');
const express = require('express');
const app = express();


app.use(express.static('../challenge_4'))

app.listen(3000, () => console.log('connect four listening on port 3000!'))