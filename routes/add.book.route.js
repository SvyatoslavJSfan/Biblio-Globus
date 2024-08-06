const express = require('express')
const addBookRouter = express.Router()
const AddBookPage = require('../src/Pages/AddBookPage')

const { Book } = require('../db/models')

addBookRouter.get('/', (req, res) => {
    try {
        res.render(AddBookPage, { user: req.locals?.user})
    } catch (error) {
        console.log('ERROR IN ADD-BOOK ROUTE', error)
        res.sendStatus(500)
    }
})


addBookRouter.post('/', async(req, res) => {
    
    try {
        const { title, author, year, genre, image, description, price, amount } = req.body
        const newBook = await Book.create(
            { title: title, 
            author: author, 
            year: Number(year),
            genre_id: Number(genre), 
            image: image, 
            description: description,
            price: Number(price),
            amount: Number(amount)
            })
        res.sendStatus(204)
        
    } catch (error) {
        console.log('ERR_CREATING_NEW_BOOK')
        res.sendStatus(500)
    }
})





module.exports = addBookRouter