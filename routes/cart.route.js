const express = require('express')
const cartRoute = express.Router()
const { Cart, User, Order } = require('../db/models')
const { where } = require('sequelize')
const CartPage = require('../src/Pages/Cart')


cartRoute.get('/', async(req, res) => {
    try {
        if (!req.session ) {
            res.sendStatus(403)
        }
        const cartFromDB = await Cart.findOne({ where: {
            user_id: req.session.user_sid
        }})

        if(cartFromDB) {
        const cart = cartFromDB.get()
        const arr = []
        arr.push(JSON.parse(cart.contents))
        const userFromDB = await User.findByPk(req.session.user_sid)
        const cartUser = userFromDB.get()
        res.render(CartPage, { user: cartUser, items: arr})
        } else {
            const userFromDB = await User.findByPk(req.session.user_sid)
        const cartUser = userFromDB.get()
        res.render(CartPage, { user: cartUser, items: []})
        }
    } catch (error) {
        console.log('ERR_CAT_ROUTE', error)
        res.sendStatus(500)
    }
})

cartRoute.post('/order', async(req, res) => {
    try {
        const cartFromDB = await Cart.findOne({ where: {
            user_id: req.session.user_sid
        }})
        const cart = cartFromDB.get()
        const newOrder = await Order.create({
            user_id: req.session.user_sid,
            books: cart.contents
        })
        await Cart.destroy({ where: {
            user_id: req.session.user_sid
        }})
        res.sendStatus(200)
    } catch (error) {
        console.log('ERR_CAT_ROUTE_ORDER', error)
        res.sendStatus(500)
    }
})

cartRoute.delete('/', async(req, res) => {
    try {
        await Cart.destroy({ where: {
            user_id: req.session.user_sid
        }})
        res.sendStatus(200)
    } catch (error) {
        console.log('ERR_CAT_ROUTE_ORDER', error)
        res.sendStatus(500)
    }
})



module.exports = cartRoute