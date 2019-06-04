const express = require('express')
const router = express.Router()
const posts = require('../controllers/postsController')

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    })
})

router.get('/posts', posts.list)
router.post('/posts/:id/comment', posts.comments)
router.get('/posts/:id', posts.get)
router.post('/posts', posts.create)
router.put('/posts/:id', posts.edit)
router.delete('/posts/:id', posts.delete)



module.exports = router