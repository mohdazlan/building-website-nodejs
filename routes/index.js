
const express = require('express');

const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/index', { pageTitle: 'Welcome' });
});


module.exports = () => {
  router.get('/', (req, res) => {
    // use ctrl+cmd+space to insert emoji
    // res.send('Hello Express 😃');
    res.sendFile(path.join(__dirname, './static/index.html'));
  });

  //   router.get('/speakers', (req, res) => {
  //     res.sendFile(path.join(__dirname, './static/speakers.html'));
  //   });

  router.use('/speakers', speakersRoute());
  router.use('/feedback', feedbackRoute());

  return router;
};
