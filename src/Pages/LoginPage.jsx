const React = require('react')
const Layout = require('../Layout/Layout')
const NavBar = require('../common/NavBar')

module.exports = function LoginPage({ user }) {
    return (
        <Layout title='Вход'>
            <NavBar user={user} />
        <form name='login'>
            <label htmlFor="email">Эл. почта: </label>
            <input type="text" name='email'/>
            <label htmlFor="password">Пароль: </label>
            <input type="text" name='password'/>
            <input type="submit" value='Войти'/>
        </form>
        </Layout>
    )
}