const React = require('react')

module.exports = function GenreCardMain({ genre }) {
    return (
        <div className='genre-card-main' data-genreid={genre.id}>
            <div className='genre-name-main'>
                <a href={`/genre/${genre.id}`}>{genre.name}</a>
            </div>
        </div>
    )
}