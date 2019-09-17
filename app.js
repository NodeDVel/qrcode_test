const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const qc = require('./routes/qrcode');

dotenv.config();

const app = express();

app.use('/', qc);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', (req, res, next) => {
    res.send('<script>alert("실행성공")</script>');
});

const port = 3000;
app.listen(port, function () { console.log('Updated : Server listening at port %d', port); }); 

module.exports = app;