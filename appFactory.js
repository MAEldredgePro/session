const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const { v4: uuidv4 } = require('uuid')


module.exports = function createApp(){
    const app = express()
    // configure to use the 'pug' view template engine
    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'pug')

    // middleware
    // configure to use automatic body parser for parsing of 'post' data
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(session({
        genid: (req) => {
            return uuidv4();
        },
        secret: 'Hakuna matata.  Long live the King!',
        resave: false,
        saveUninitialized: true,
        cookie: {
                maxAge: 60 * 60 * 1000,
                secure: true } // 1 hour
    }))

    return app
}
