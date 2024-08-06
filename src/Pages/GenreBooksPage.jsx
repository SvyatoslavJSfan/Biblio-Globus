const React = require('react')
const Layout = require('../Layout/Layout')
const NavBar = require('../common/NavBar')
const SearchField = require('../common/SearchField')
const BookCardOnGenrePage = require('../common/BookCardOnGenrePage')
const AdminPanel = require('../common/AdminPanel')

module.exports = function GenreBooksPage({ books, user }) {
    if(user?.isAdmin) {
        return (
        <Layout title={'BIBLIO-GLOBUS'}>
            <NavBar user={user}/>
            <AdminPanel/>
            <SearchField/>
            {
                books && books.length && books.map(book => {
                    return (
                        <BookCardOnGenrePage book={book} key={book.id} user={user}/>
                    )
                })
            }
        </Layout>
    )
    }

    return (
        <Layout title={'BIBLIO-GLOBUS'}>
            <NavBar user={user}/>
            <SearchField/>
            {
                books && books.length && books.map(book => {
                    return (
                        <BookCardOnGenrePage book={book} key={book.id} user={user}/>
                    )
                })
            }
        </Layout>
    )
    
}