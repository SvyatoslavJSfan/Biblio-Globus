const express = require('express')
const bookRouter = express.Router()
const BookPage = require('../src/Pages/BookPage')
const { Book, User, Comment } = require('../db/models')

bookRouter.get('/:id', async(req, res) => {
    try {
        const { id } = req.params
        const bookFromDB = await Book.findByPk(Number(id))
        const userFromDB = await User.findByPk(req.session?.user_sid)
        let normalUser
        if(userFromDB) {
            normalUser = userFromDB.get()
        }
        if (bookFromDB) {
            const book = bookFromDB.get()
            res.render(BookPage, { book, user: normalUser || null })
        } else {
            res.status(404).json({ message: 'Book not found'})
        }
    } catch (error) {
        console.log('ERR_BOOK_ROUTE', error)
        res.sendStatus(500)
    }
})

bookRouter.post('/comment', async(req, res) => {
    try {
        const { book_id, comment } = req.body
        console.log(req.body)
        const newComm = await Comment.create({
            user_id: req.session.user_sid,
            book_id,
            comment
        })
        // const bookFromDB = await Book.findByPk(Number(id))
        // const userFromDB = await User.findByPk(req.session?.user_sid)
        // let normalUser
        // if(userFromDB) {
        //     normalUser = userFromDB.get()
        // }
        // if (bookFromDB) {
        //     const book = bookFromDB.get()
        //     res.render(BookPage, { book, user: normalUser || null})
        // } else {
        //     res.status(404).json({ message: 'Book not found'})
        // }
        res.sendStatus(204)
    } catch (error) {
        console.log('ERR_BOOK_ROUTE', error)
        res.sendStatus(500)
    }
})


bookRouter.get('/:id/show-comments', async (req, res) => {

    try {
    const { id } = req.params
    console.log(id);
    const commentsFromDB = await Comment.findAll({ where: {book_id: Number(id)}})
    const comments = JSON.parse(JSON.stringify(commentsFromDB))
    res.json(comments)
    } catch (error) {
        console.log('err', error);
    }

})

module.exports = bookRouter