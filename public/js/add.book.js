const addBookForm = document.forms['new-book']

if (addBookForm) {
    addBookForm.addEventListener('submit', async(event) => {
    event.preventDefault()
    try {
        const formData = Object.fromEntries(new FormData(addBookForm))
        const response = await fetch('/new-book', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (response.ok) {
            addBookForm.reset()
            window.location.assign('/')
        }

    } catch (error) {
        console.log('ERR_CREATING_NEW_BOOK', error);
    }
})
}
