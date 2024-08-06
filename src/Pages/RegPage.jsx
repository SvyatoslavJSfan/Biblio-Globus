const React = require('react')
const Layout = require('../Layout/Layout')
const NavBar = require('../common/NavBar')

module.exports = function RegistrationPage({ user }) {
    return (
        <Layout title='Регистрация'>
            <NavBar user={user} />
        <form name='registration'>
            <label htmlFor="name">Ваше имя: </label>
            <input type="text" name="name"/>
            <label htmlFor="email">Эл. почта: </label>
            <input type="text" name='email'/>
            <label htmlFor="password">Пароль: </label>
            <input type="text" name='password'/>
            <input type="submit" value='Зарегистрироваться'/>
        </form>
        </Layout>
    )
}