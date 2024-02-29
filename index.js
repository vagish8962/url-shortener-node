const express = require('express');
const connectToDb = require('./connect');
const router = require('./routes/url');
const app = express();

app.use(express.json());
app.use('/api', router);
connectToDb('mongodb://127.0.0.1:27017/urlshortener')


app.listen(3001);