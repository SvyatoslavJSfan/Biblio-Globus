const React = require('react')

module.exports = function NavBar({ user }) {
    return (
        <div className='navbar'>
        {
            user ? 
            <div>
                <div><a href="/">Home</a></div>
                <div><a href="/logout">Logout</a></div>
                <div><a href="/cart">Корзина</a></div>
                <div><a href="/profile">{user.name}</a></div>
            </div>
            :
            <div>
                <span><a href="/">Home</a></span>
                {' '}
                <span><a href="/reg">Register</a></span>
                {' '}
                <span><a href="/login">Login</a></span>
            </div>
        }
    </div>
    )
}