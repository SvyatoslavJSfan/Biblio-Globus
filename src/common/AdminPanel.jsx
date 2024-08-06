const React = require('react')

module.exports = function AdminPanel() {
    return (
        <div className='admin-panel'>
            <div className='add-book'>
                <button className='add-book-btn'>
                    <a href="/new-book">ДОБАВИТЬ КНИГУ</a>
                </button>
            </div>
        </div>
    )
}