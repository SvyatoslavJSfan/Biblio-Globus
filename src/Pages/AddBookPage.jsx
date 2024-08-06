const React = require('react')
const Layout = require('../Layout/Layout')
const NavBar = require('../common/NavBar')

module.exports = function AddBookPage({ user }) {
    return (
        <Layout title={'ADDING BOOK'}>
            <NavBar user={user}/>
            <div className='add-book'>
                <h2>ДОБАВЛЕНИЕ КНИГИ</h2>
                <form name='new-book'>
                    <input type="text" name='title' placeholder='название'/>
                    <br/>
                    <br/>
                    <input type="text" name='author' placeholder='автор'/>
                    <br/>
                    <br/>
                    <input type="number" name='year' placeholder='год'/>
                    <br/>
                    <br/>
                    <input type="text" name='genre' placeholder='жанр'/>
                    <br/>
                    <br/>
                    <input type="text" name='image' placeholder='обложка'/>
                    <br/>
                    <br/>
                    <input type="text" name='description' placeholder='описание'/>
                    <br/>
                    <br/>
                    <input type="number" name='price' placeholder='цена'/>
                    <br/>
                    <br/>
                    <input type="number" name='amount' placeholder='кол-во'/>
                    <br/>
                    <br/>
                    <input type="submit" value="ДОБАВИТЬ"/>
                </form>

            </div>
        </Layout>
    )
}