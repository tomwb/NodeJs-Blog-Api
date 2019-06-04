const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const router = express.Router()
const mongoose = require('mongoose')

// banco
mongoose.connect('mongodb://nodejs-blog-api-mongodb:27017/blog')

// config para receber post
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
const index = require('./routes/index')
app.use('/', index)

module.exports = app