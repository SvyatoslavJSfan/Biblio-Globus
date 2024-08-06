const React = require('react')

module.exports = function BookCardOnGenrePage({ book, user }) {
    // console.log({user});
    if (user && user.isAdmin) {
        return (
        <div className='book-card-genre' data-bookid={book.id} data-genreid={book.genre_id} 
        data-title={book.title} data-author={book.author} data-year={book.year} data-price={book.price}
        data-image={book.image} data-description={book.description} data-amount={book.amount}>
            <div className='book-title-genre'>
                <div className='book-image-wrapper'><a href={`/book/${book.id}`}><img src={book.image} alt="book" className='book-image'/></a></div>
                <div>Название: {book.title}</div>
                <div>Автор: {book.author}</div>
                <div>Год издания: {book.year}</div>
                <div>Цена: {book.price}</div>
                <div><button className='delete-book-btn'>Удалить</button></div>
                <div><button className='edit-book-btn'>Редактировать</button></div>
            </div>
        </div>
    )
    }
    if (user) {
        return (
            <div className='book-card-genre' data-bookid={book.id} data-genreid={book.genre_id} 
            data-title={book.title} data-author={book.author} data-year={book.year} data-price={book.price}
            data-image={book.image} data-description={book.description} data-amount={book.amount}>
                <div className='book-title-genre'>
                    <div className='book-image-wrapper'><a href={`/book/${book.id}`}><img src={book.image} alt="book" className='book-image'/></a></div>
                    <div>Название: {book.title}</div>
                    <div>Автор: {book.author}</div>
                    <div>Год издания: {book.year}</div>
                    <div>Цена: {book.price}</div>
                    <div><button className='to-cart-btn'>В корзину</button></div>
                </div>
            </div>
        )
    }

    return (
        <div className='book-card-genre' data-bookid={book.id}>
            <div className='book-title-genre'>
            <div className='book-image-wrapper'><a href={`/book/${book.id}`}><img src={book.image} alt="book" className='book-image'/></a></div>
                <div>Название: {book.title}</div>
                <div>Автор: {book.author}</div>
                <div>Год издания: {book.year}</div>
                <div>Цена: {book.price}</div>
            </div>
        </div>
    )

}