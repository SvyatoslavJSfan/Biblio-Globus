const React = require('react')
const Layout = require('../Layout/Layout')
const NavBar = require('../common/NavBar')


module.exports = function BookPage({ user, book }) {
    if (user) {
        return (
            <Layout title={`${book.title}`}>
                <NavBar user={user}/>
                <div className='book-info-wrapper' data-id={book.id}>
                    <div className='book-image'><img src={`${book.image}`} alt="book" className='book-page-image'/></div>
                    <div className='book-page-title'>{book.title}</div>
                    <div className='book-page-author'>{book.author}</div>
                    <div className='book-page-year'>{`Издание ${book.year} года`}</div>
                    <div className='book-page-description'>{book.description}</div>
                    <div className='book-page-price'>{`Цена: ${book.price}`}</div>
                    <div className='book-comments'>
                    </div>
                    <div className='show-comments-btn'><button className='show-comments' data-id={book.id}>Посмотреть комментарии</button></div>
                    <div className='add-comment-btn'><button className='add-comment'>Добавить комментарий</button></div>
                </div>
            </Layout>
        )
    }
    return (
        <Layout title={`${book.title}`}>
            <NavBar user={user}/>
            <div className='book-info-wrapper' data-id={book.id}>
                <div className='book-image'><img src={`${book.image}`} alt="book" className='book-page-image'/></div>
                <div className='book-page-title'>{book.title}</div>
                <div className='book-page-author'>{book.author}</div>
                <div className='book-page-year'>{`Издание ${book.year} года`}</div>
                <div className='book-page-description'>{book.description}</div>
                <div className='book-page-price'>{`Цена: ${book.price}`}</div>
                <div className='book-comments'>
                    </div>
                <div className='show-comments-btn'><button className='show-comments'>Посмотреть комментарии</button></div>
            </div>
        </Layout>
    )
}

