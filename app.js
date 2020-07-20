const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5500;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('./routes/index'));
app.use(require('./routes/carry'));
app.use(require('./routes/send'));

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
