const delBookBtns = document.querySelectorAll('.delete-book-btn')


delBookBtns.forEach(btn => {
    btn.addEventListener('click', async(event) => {
        const book = event.target.parentNode.parentNode.parentNode
        const genreId = event.target.parentNode.parentNode.parentNode.dataset.genreid
        const bookId = event.target.parentNode.parentNode.parentNode.dataset.bookid
        const response = await fetch(`/genre/${genreId}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ book_id: bookId })
        })

        if (response.ok) {
            book.remove()
            alert('DELETING SUCCESSFUL')
        }
    })
})