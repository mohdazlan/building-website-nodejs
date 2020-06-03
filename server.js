const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('PMU_debugger');

const app = express();

app.use(morgan('dev'));

const port = 3000;

app.get('/', (req, res) => {
  // use ctrl+cmd+space to insert emoji
  res.send('Hello Express 😃');
});

app.listen(port, () => {
  global.console.log(`Express server listnening to port ${chalk.rgb(123,45,67).underline(port)}`);
// user curl to test in terminal window
});
