const React = require('react')

module.exports = function SearchField() {
    return (
        <div className='search-field'>
            <form name='search-form'>
                <input type="text" name='searchrequest' placeholder='search...'/>
                <input type="submit" value="ПОИСК"/>
            </form>
        </div>
    )
}