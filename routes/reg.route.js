const express = require('express')
const regRouter = express.Router()
const bcrypt = require('bcrypt')
const RegPage = require('../src/Pages/RegPage')
const { User } = require('../db/models')



regRouter.get('/', (req, res) => {
    try {
        res.render(RegPage, { user: res.locals?.user })
    } catch (error) {
        console.log('ERR_IN_REGISTRATION_ROUTE_GET', error);
    }
})

regRouter.post('/', async(req, res) => {
    try {
        const { name, email, password } = req.body
        const hashPassword = await bcrypt.hash(password, 10)
        const user = await User.create({name, email, password: hashPassword })
        req.session.user_sid = user.id
        res.sendStatus(204)
    } catch (error) {
        console.log('ERR_REGISTRATING_USER', error)
        res.sendStatus(403)
    }
})





module.exports = regRouter