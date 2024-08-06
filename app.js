require('@babel/register')
const express = require('express')

const serverConfig = require('./config/server.config')
const mainRouter = require('./routes/main.route')
const regRouter = require('./routes/reg.route')
const logoutRouter = require('./routes/logout.route')
const loginRouter = require('./routes/login.route')
const addBookRouter = require('./routes/add.book.route')
const genreRouter = require('./routes/genre.route')
const buyBookRouter = require('./routes/buy.book.route')
const cartRoute = require('./routes/cart.route')
const profileRoute = require('./routes/profile.route')
const bookRouter = require('./routes/book.route')

const app = express()

const PORT = 3000


serverConfig(app)

app.use('/', mainRouter)
// app.use('/articles', articleRouter)
app.use('/reg', regRouter)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)
app.use('/new-book', addBookRouter)
app.use('/genre', genreRouter)
app.use('/buy', buyBookRouter)
app.use('/cart', cartRoute)
app.use('/profile', profileRoute)
app.use('/book', bookRouter)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})