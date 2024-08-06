const React = require('react')



module.exports = function Layout({ title, children }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{ title ? title : 'Layout'}</title>
            <script defer src='/js/registration.js' ></script>
            <script defer src='/js/login.js' ></script>
            <script defer src='/js/add.book.js' ></script>
            <script defer src='/js/buy.book.js' ></script>
            <script defer src='/js/search.js' ></script>
            <script defer src='/js/delete.book.js' ></script>
            <script defer src='/js/update.book.js' ></script>
            <script defer src='/js/clear.cart.js' ></script>
            <script async src='/js/comments.js' ></script>
            <link rel="stylesheet" href="/css/app.css" />
        </head>
        <body>
            { children }
            
        </body>
        </html>
    )
}