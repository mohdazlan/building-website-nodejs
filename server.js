const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('PMU_debugger');
const path = require('path');

const app = express();

app.use(morgan('dev'));

const port = 3000;

app.use(express.static(path.join(__dirname,'./static')));
app.get('/', (req, res) => {
  // use ctrl+cmd+space to insert emoji
  // res.send('Hello Express 😃');
  res.sendFile(path.join(__dirname, './static/index.html'));
});

app.get('/speakers', (req, res) => {
  res.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.listen(port, () => {
  global.console.log(`Express server listnening to port ${chalk.rgb(123, 45, 67).underline(port)}`);
// user curl to test in terminal window eg: curl localhost:3000
});
