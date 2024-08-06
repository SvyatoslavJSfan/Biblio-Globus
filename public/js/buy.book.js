const toCartBtns = Array.from(document.querySelectorAll('.to-cart-btn'))
const makeOrderBtn = document.querySelector('.make-order-div')
const toCartBtn = document.getElementsByClassName('to-cart-btn')
console.log(toCartBtn);

if(toCartBtn) {
    toCartBtn.addEventListener('click', async(event) => {
        const bookId = event.target.parentNode.parentNode.parentNode.dataset.bookid
        console.log('click');
        const response = await fetch('/buy', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ book_id: bookId})
        })

        if (response.status === 403) {
            alert('Для покупки необходима регистрация / вход.')
        }
    }) 
}

toCartBtns.forEach(btn => {
    btn.addEventListener('click', async(event) => {
        const bookId = event.target.parentNode.parentNode.parentNode.dataset.bookid
        console.log('click');
        const response = await fetch('/buy', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ book_id: bookId})
        })

        if (response.status === 403) {
            alert('Для покупки необходима регистрация / вход.')
        }
    }) 
})

if (makeOrderBtn) {
makeOrderBtn.addEventListener('click', async(event) => {
    try {
        const response = await fetch('/cart/order', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }
        })

        if (response.ok) {
            window.location.assign('/')
        }

    } catch (error) {
        console.log('ERR_IN_BUY_BOOK_JS_MAKE_ORDER_BTN', error);
    }
})
}
