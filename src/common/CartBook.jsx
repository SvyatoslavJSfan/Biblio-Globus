const React = require('react')

module.exports = function CartBook({ book }) {
    return (
        <div className='book-in-cart'>
            <div><img src={`${book.image}`} alt="cart-book" className='cart-book'/></div>
            <div>{`${book.author}, ${book.title}`}</div>
            <div>{`Цена: ${book.price}`}</div>
        </div>
    )
}