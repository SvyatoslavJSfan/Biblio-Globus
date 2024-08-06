const express = require('express')
const morgan = require('morgan')
const ssr = require('../middlewares/render')
const cookieParser = require('cookie-parser')
const checkUser = require('../middlewares/checkUser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const sessionConfig = require('./sessionsConfig')

module.exports = function serverConfig(app) {
    app.use(express.json())
    app.use(express.urlencoded( { extended: true }))
    app.use(morgan('dev'))
    app.use(express.static('public'))
    app.use(cookieParser())
    app.use(ssr)
    app.use(session(sessionConfig))
    app.use(checkUser)
    
}