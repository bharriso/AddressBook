var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multer = require('multer');

var dbConfig = require('./config/database');

var app = express();

mongoose.connect(dbConfig.url, {useUnifiedTopology:true, useNewUrlParser:true});

app.use(bodyParser.json());
app.use(express.static(__dirname+'/../client'));

const multer = require('multer');
const upload = multer({storage: storage});

var router = express.Router();

router.route('/contacts').get(require('./controllers/getContactList')).post(require('./controllers/createContact'));

router.route('/contact/:id').get(require('./controllers/getContact')).delete(require('./controllers/deleteContact')).put(require('./controllers/updateContact'));

app.use(router);

var port = process.env.PORT || 3000;
app.listen(port);

console.log('Everything happens here http://localhost: '+port+'/');