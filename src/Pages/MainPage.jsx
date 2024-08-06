const React = require('react')
const Layout = require('../Layout/Layout')
const NavBar = require('../common/NavBar')
const SearchField = require('../common/SearchField')
const GenreCardMain = require('../common/GenreCardMain')
const AdminPanel = require('../common/AdminPanel')

module.exports = function MainPage({ genres, user }) {
    if(user?.isAdmin) {
        return (
        <Layout title={'BIBLIO-GLOBUS'}>
            <NavBar user={user}/>
            <AdminPanel/>
            <SearchField/>
            <div className='search-results'></div>
            {
                genres && genres.length && genres.map(genre => {
                    return (
                        <GenreCardMain genre={genre} key={genre.id}/>
                    )
                })
            }
            <div className='book-card-genre' data-bookid={1}>
            <div className='book-title-genre'>
                <div className='book-image-wrapper'><img alt="book" className='book-image' style="width: 200px"/></div>
                <div>Название: </div>
                <div>Автор: </div>
                <div>Год издания: </div>
                <div>Цена: </div>
                <div><button className='to-cart-btn'>В корзину</button></div>
            </div>
        </div>
        </Layout>
    )
    }

    return (
        <Layout title={'BIBLIO-GLOBUS'}>
            <NavBar user={user}/>
            <SearchField/>
            <div className='search-results'></div>
            {
                genres && genres.length && genres.map(genre => {
                    return (
                        <GenreCardMain genre={genre} key={genre.id}/>
                    )
                })
            }
             <div className='book-card-genre' data-bookid={1}>
            <div className='book-title-genre'>
                <div className='book-image-wrapper'><img alt="book" className='book-image'/></div>
                <div>Название: </div>
                <div>Автор: </div>
                <div>Год издания: </div>
                <div>Цена: </div>
                <div><button className='to-cart-btn'>В корзину</button></div>
            </div>
        </div>
        </Layout>
    )
    
}