const searchForm = document.forms['search-form']
const searchDivOnMain = document.querySelector('.search-results')


searchForm.addEventListener('submit', async(event) => {
        event.preventDefault()
    try {
        const formData = Object.fromEntries(new FormData(searchForm))
        const response = await fetch('/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (response.ok) {
            const result = await response.json()
            const div = document.createElement('div')
            div.setAttribute('className', 'book-card-genre')
            const filling = `
            <div className='book-card-genre' data-bookid=${result.id}>
            <div className='book-title-genre'>
                <div className='book-image-wrapper'><img src=${result.image} alt="book" className='book-image' style="width: 200px"/></div>
                <div>Название: ${result.title}</div>
                <div>Автор: ${result.author}</div>
                <div>Год издания: ${result.year}</div>
                <div>Цена: ${result.price}</div>
                <div><button className='to-cart-btn'>В корзину</button></div>
            </div>
        </div>
        <script defer src='/js/buy.book.js' ></script>
            `

            div.innerHTML = filling
            searchDivOnMain.appendChild(div)
            searchForm.reset()
            const toCartBtn = document.getElementsByClassName('to-cart-btn')
        console.log(toCartBtn);
        }

    } catch (error) {
        console.log('ERR_SEARCHING', error);
    }
})