const express = require('express');
const router = express.Router();

const fs = require('fs');

router.get('/carry-packages', (req, res, next) => {
  res.render('carry', {apiKey: process.env.GOOGLE_API_KEY});
});

router.post('/carry-packages', (req, res, next) => {
  fs.readFile('./carriers.json', 'utf8', (err, data) => {
    if (err) {
      return console.error(err);
    }
    const file = JSON.parse(data);
    file.carriers.push(req.body);
    fs.writeFile('./carriers.json', JSON.stringify(file), () => console.log('New Carrier!'));
  });
  res.redirect('/');
});

router.get('/api/carriers', (req, res, next) => {
  fs.readFile('./carriers.json', 'utf8', (err, data) => {
    if (err) {
      return console.error(err);
    }
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

module.exports = router;
