const React = require('react')
const Layout = require('../Layout/Layout')
const NavBar = require('../common/NavBar')
const CartBook = require('../common/CartBook')

module.exports = function Cart({ user, items }) {
    if(items && items.length !== 0) {
        return (
        <Layout title='Корзина'>
            <NavBar user={user} />
        <div className='cart'>
            <h1 className='cart-header'>Ваша корзина</h1>
            <div className='cart-contents-wrapper'>
            {
                items && items.length && items.map(item => {
                    return <CartBook book={item} key={item.id} />
                })
            }
            <div className='make-order-div'>
                <button className='make-order-btn'>Оформить заказ</button>
            </div>
            <div className='clear-cart'>
                <button className='clear-cart'>Очистить корзину</button>
            </div>                
            </div>

        </div>
        </Layout>
    )
    }
    
    return (
        <Layout title='Корзина'>
            <NavBar user={user} />
        <div className='cart'>
            <h1>Ваша корзина пуста</h1>

        </div>
        </Layout>
    )
}