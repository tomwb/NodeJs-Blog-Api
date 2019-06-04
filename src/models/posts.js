const mongoose = require('mongoose')
const Comments = require('./comments')

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    comments : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }]
})

postSchema.statics.publicData = function (data) {
  let output = {
  	id: data._id,
  	title: data.title,
  	content: data.content,
  	comments: []
  }
  let promises = []

  if (data.comments) {
  	promises = data.comments.map(data => {
      output.comments.push(Comments.publicData(data))
    })
  }

  return Promise.all(promises).then(() => {
  	return output
  })
}

const Posts = mongoose.model('Post', postSchema);

module.exports = Posts