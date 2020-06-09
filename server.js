const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('PMU_debugger');
const path = require('path');
const cookieSession = require('cookie-session');

const FeedbackService = require('./services/FeedbackService');
const SpeakersService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./data/feedback.json');
const speakersService = new SpeakersService('./data/speakers.json');


const routes = require('./routes');

const app = express();

app.use(morgan('dev'));

const port = 3000;

app.set('trust proxy', 1);

app.use(cookieSession({
  name: 'session',
  keys: ['12345', '12345'],
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.use('/', routes({
  feedbackService,
  speakersService,
}));

app.listen(port, () => {
  global.console.log(`Express server listnening to port ${chalk.rgb(123, 45, 67).underline(port)}`);
  // user curl to test in terminal window eg: curl localhost:3000
});
