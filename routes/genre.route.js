const express = require('express')
const genreRouter = express.Router()
const GenreBooksPage = require('../src/Pages/GenreBooksPage')
const { Book, Genre } = require('../db/models')

genreRouter.get('/:id', async(req, res) => {
    
    try {
        const { id } = req.params
        const books = await Book.findAll({ where: { genre_id: Number(id)}})
        const temp = JSON.parse(JSON.stringify(books))
        res.render(GenreBooksPage, { books: temp, user: req.locals?.user})
    } catch (error) {
        console.log('ERR_GENRE_ROUTE', error)
        res.sendStatus(500)
    }
})

genreRouter.delete('/:id', async(req, res) => {
    
    try {
        const { book_id } = req.body
        await Book.destroy({ where: { id: Number(book_id)}})
        res.sendStatus(204)
    } catch (error) {
        console.log('ERR_GENRE_ROUTE_DELETING', error)
        res.sendStatus(500)
    }
})

genreRouter.put('/:id', async(req, res) => {
    
    try {
        const { title, author, year, genre, image, description, price, amount, book_id } = req.body
        await Book.update({ title, author, year, genre, image, description, price, amount }, 
            { where: { id: Number(book_id)}})
        res.sendStatus(204)
    } catch (error) {
        console.log('ERR_GENRE_ROUTE_UPDATING', error)
        res.sendStatus(500)
    }
})



module.exports = genreRouter





