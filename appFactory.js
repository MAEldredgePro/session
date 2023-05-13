const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

module.exports = function createApp(){
    const app = express()
    // configure to use the 'pug' view template engine
    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'pug')
    // configure to use automatic body parser for parsing of 'post' data
    app.use(bodyParser.urlencoded({ extended: false }))

    return app
}
