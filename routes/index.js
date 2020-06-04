
const express = require('express');

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

  router.get('/speakers', (req, res) => {
    res.sendFile(path.join(__dirname, './static/speakers.html'));
  });

  return router;
};
