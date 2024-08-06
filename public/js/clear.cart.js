const clearCartBtn = document.querySelector('.clear-cart')

clearCartBtn.addEventListener('click', async(event) => {
    try {
        const response = await fetch('/cart', {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })

        if (response.ok) {
            const cartContentsDiv = document.querySelector('.cart-contents-wrapper')
            const cartHeader = document.querySelector('.cart-header')
            cartContentsDiv.remove()
            cartHeader.innerText = 'Ваша корзина пуста'
        }
    } catch (error) {
        console.log('ERR_CLEARING_CART', error);
    }
})