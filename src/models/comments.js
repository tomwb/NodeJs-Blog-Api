const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
})

commentSchema.statics.publicData = function (data) {
  let out = {
  	id: data._id,
  	name: data.name,
  	email: data.email,
  	message: data.message,
  }

  return out;
}


const Comments = mongoose.model('Comments', commentSchema);

module.exports = Comments