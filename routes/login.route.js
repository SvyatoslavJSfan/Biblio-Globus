const express = require('express')
const loginRouter = express.Router()
const LoginPage = require('../src/Pages/LoginPage')
const bcrypt = require('bcrypt')
const { User } = require('../db/models')

loginRouter.get('/', (req, res) => {
    try {
        res.render(LoginPage)
    } catch (error) {
        console.log('ERROR IN GET-LOGIN ROUTE', error)
        res.sendStatus(500)
    }
})


loginRouter.post('/', async(req, res) => {
    
    try {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email }})
        // console.log(user);
        const foundUser = user.get()
        // console.log('Мой консоль-лог: ', foundUser);
        const checkPassword = await bcrypt.compare(password, foundUser.password)
    
        if (checkPassword) {
            req.session.user_sid = foundUser.id
            res.sendStatus(204)
        } else {
            res.status(403).json({ message: 'Проверьте правильность ввода логина или пароля'})
        }
        
    } catch (error) {
        console.log('ERR_IN_REG_LOGIN_POST');
    }
})





module.exports = loginRouter