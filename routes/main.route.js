const express = require('express')
const mainRouter = express.Router()
const MainPage = require('../src/Pages/MainPage')
const { Genre, Book } = require('../db/models')



mainRouter.get('/', async(req, res) => {
    try {
        const genres = await Genre.findAll()
        const temp = JSON.parse(JSON.stringify(genres))
        res.render(MainPage, {genres: temp, user: res.locals?.user})
    } catch (error) {
        console.log('ERR_IN_MAIN_ROUTE_GET', error);
    }
})


mainRouter.post('/', async(req, res) => {
    try {
        const { searchrequest } = req.body
        const searchResultFromDB = await Book.findOne({ where: {
            author: searchrequest
        }})

        const searchResultFromDBtitle = await Book.findOne({ where: {
            title: searchrequest
        }})

        if (searchResultFromDB) {
        const normalSearchResult = searchResultFromDB.get()
        // console.log(normalSearchResult);
        res.json(normalSearchResult)
        return
        }

        if (searchResultFromDBtitle) {
            const normalSearchResult = searchResultFromDBtitle.get()
            res.json(normalSearchResult)
        } else {
            res.status(404).json({ message: 'По вашему запросу ничего не найдено.'})
        }
        
    } catch (error) {
        console.log('ERR_SEARCHING_MAIN_ROUTE', error)
        res.sendStatus(500)
    }
})


module.exports = mainRouter