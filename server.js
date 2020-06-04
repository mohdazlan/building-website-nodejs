const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('PMU_debugger');
const path = require('path');

const routes = require('./routes');

const app = express();

app.use(morgan('dev'));

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.use('/',routes());

app.listen(port, () => {
  global.console.log(`Express server listnening to port ${chalk.rgb(123, 45, 67).underline(port)}`);
// user curl to test in terminal window eg: curl localhost:3000
});
