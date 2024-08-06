const React = require('react')
const Layout = require('../Layout/Layout')
const NavBar = require('../common/NavBar')
const OrderHistory = require('../common/OrderHistory')

module.exports = function UserProfile({ user, orders }) {
    return (
        <Layout title={`${user.name}`}>
            <NavBar user={user}/>
            <h1>{`Приветствуем Вас, ${user.name}`}</h1>
            <h3>История заказов</h3>
            <OrderHistory orders={orders}/>
        </Layout>
    )
}