const { Posts, Comments } = require('../models')

exports.list = (req, res, next) => {
    Posts.find({}).populate('comments').then(function(data) {
    	const promises = data.map(data => {
	      return Posts.publicData(data)
	    })
	    return Promise.all(promises).then(data => {
	    	res.send({
	    		success: true,
	    		data: data
	    	})
	    })
   	})
}

exports.get = (req, res, next) => {
	let id = req.params.id
    Posts.findById(id).populate('comments').then(function(data) {
		Posts.publicData(data).then(function(post) {
	        res.send({
	        	success: true,
	        	data: post
	        })
	    })
	}).catch(function(e) {
		res.send({
        	success: false,
        	message: 'Post não encontrado'
        })
	})
}

exports.create = (req, res, next) => {
    const data = Object.assign({ title: '', content: '' }, req.body)
    var post = new Posts(data)
	post.save().then(function() {
        res.send({
        	success: true,
        	message: "Post criado com sucesso"
        })
    })
}

exports.edit = (req, res, next) => {
    let id = req.params.id
    const data = Object.assign({ title: '', content: '' }, req.body)
    Posts.findById(id).then(function(post) {
		Posts.update({
			_id: id
		}, data).then(function() {
	        res.send({
	        	success: true,
	        	message: "Post editado com sucesso"
	        })
	    })
	}).catch(function(e) {
		res.send({
        	success: false,
        	message: 'Post não encontrado'
        })
	})
}

exports.delete = (req, res, next) => {
    let id = req.params.id
    Posts.findByIdAndRemove(id).then(function(post) {
        res.send({
        	success: true,
        	message: "Post removido com sucesso"
        })
	}).catch(function(e) {
		res.send({
        	success: false,
        	message: 'Post não encontrado'
        })
	})
}

exports.comments = (req, res, next) => {
    let id = req.params.id
    const data = Object.assign({ name: '', email: '', message: '' }, req.body)
    Posts.findById(id).then(function(post) {
    	var comment = new Comments(data)
		comment.save().then(function() {
	    	post.comments.push(comment._id)
	        Posts.update({
				_id: id
			}, post).then(function() {
		        res.send({
		        	success: true,
		        	message: "Comentario criado com sucesso"
		        })
		    })
		})
	}).catch(function(e) {
		res.send({
        	success: false,
        	message: 'Post não encontrado'
        })
	})
}