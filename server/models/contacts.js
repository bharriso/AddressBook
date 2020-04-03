var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var contactsSchema = new Schema({
  name : String,
  email: String,
  number: String,
  img : {data : Buffer, contentType: String}
});

module.exports= mongoose.model('contacts', contactsSchema);