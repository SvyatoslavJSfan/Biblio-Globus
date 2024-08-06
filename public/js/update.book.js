const updateBookBtns = Array.from(document.querySelectorAll('.edit-book-btn'))


updateBookBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        
        const bookToUpdate = event.target.parentNode.parentNode.parentNode
        const bookTitle = event.target.parentNode.parentNode.parentNode.dataset.title
        const bookAuthor = event.target.parentNode.parentNode.parentNode.dataset.author
        const bookYear = event.target.parentNode.parentNode.parentNode.dataset.year
        const bookGenre = event.target.parentNode.parentNode.parentNode.dataset.genreid
        const bookImage = event.target.parentNode.parentNode.parentNode.dataset.image
        const bookDescription = event.target.parentNode.parentNode.parentNode.dataset.description
        const bookPrice = event.target.parentNode.parentNode.parentNode.dataset.price
        const bookAmount = event.target.parentNode.parentNode.parentNode.dataset.amount
        // console.log(description);

        const formForUpdate = document.createElement('div')
        const filling = `
        <form name='update-book'>
                    <input type="text" name='title' placeholder='название' id='title'/>
                    <br/>
                    <br/>
                    <input type="text" name='author' placeholder='автор' id='author'/>
                    <br/>
                    <br/>
                    <input type="number" name='year' placeholder='год' id='year'/>
                    <br/>
                    <br/>
                    <input type="text" name='genre' placeholder='жанр' id='genre'/>
                    <br/>
                    <br/>
                    <input type="text" name='image' placeholder='обложка' id='image'/>
                    <br/>
                    <br/>
                    <input type="text" name='description' placeholder='описание' id='description'/>
                    <br/>
                    <br/>
                    <input type="number" name='price' placeholder='цена' id='price'/>
                    <br/>
                    <br/>
                    <input type="number" name='amount' placeholder='кол-во' id='amount'/>
                    <br/>
                    <br/>
                    <input type="submit" value="СОХРАНИТЬ"/>
                </form>
        `
        formForUpdate.innerHTML = filling
        bookToUpdate.append(formForUpdate)

        const title = document.getElementById('title')
        title.defaultValue = bookTitle

        const author = document.getElementById('author')
        author.defaultValue = bookAuthor

        const year = document.getElementById('year')
        year.defaultValue = bookYear

        const genre = document.getElementById('genre')
        genre.defaultValue = bookGenre

        const image = document.getElementById('image')
        image.defaultValue = bookImage

        const desc = document.getElementById('description')
        desc.defaultValue = bookDescription

        const price = document.getElementById('price')
        price.defaultValue = bookPrice

        const amount = document.getElementById('amount')
        amount.defaultValue = bookAmount
        
        const EditForm = document.forms['update-book']
        EditForm.addEventListener('submit', async(event) => {
            event.preventDefault()

            
            try {
                const bookId = event.target.parentNode.parentNode.dataset.bookid
                const formData = Object.fromEntries(new FormData(EditForm))
                formData['book_id'] = bookId
                const response = await fetch (`/genre/${bookGenre}`, {
                    method: 'PUT',
                    headers: {
                'Content-type': 'application/json'
                    },
                body: JSON.stringify(formData)
                })
            } catch (error) {
                console.log('ERR_UPDATING_BOOK', error);
            }
        })
        // const genreId = event.target.parentNode.parentNode.parentNode.dataset.genreid
        // const bookId = event.target.parentNode.parentNode.parentNode.dataset.bookid
        // const response = await fetch(`/genre/${genreId}`, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify({ book_id: bookId })
        // })

        // if (response.ok) {
        //     book.remove()
        //     alert('DELETING SUCCESSFUL')
        // }
    })
})

// if (EditForm) {
//     EditForm.addEventListener('submit', (event) => {
//         event.target.preventDefault()
//         console.log('*******************************');
        
//         try {
//             console.log(event.target.previousSibling);
//         } catch (error) {
//             console.log('ERR_UPDATING_BOOK', error);
//         }
//     })
// }