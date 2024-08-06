const express = require('express')
const buyBookRouter = express.Router()
const { Book, Cart } = require('../db/models')


buyBookRouter.post('/', async(req, res) => {
    try {
        if(!req.session?.user_sid) {
            res.status(403).json({ message: 'Authorization needed'})
            return
        }
        const { book_id } = req.body
        const bookFromDB = await Book.findByPk(Number(book_id))
        const { title, author, price, image } = bookFromDB.get()
        const cartItem = JSON.stringify({title, author, price, image})
        const arrOfBooks = []
        const cart = await Cart.create({ 
            user_id: Number(req.session.user_sid),
            contents: cartItem
        })

        res.sendStatus(200)
    } catch (error) {
        console.log('ERR_BUY_BOOK_ROUTE', error)
        res.sendStatus(500)
    }
})


module.exports = buyBookRouter