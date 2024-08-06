const regForm = document.forms['registration']



regForm.addEventListener('submit', async(event) => {
    event.preventDefault()
    try {
        const formData = Object.fromEntries(new FormData(regForm))
        const response = await fetch('/reg', {
            method: 'POST',
            headers:  {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData),
            credentials: 'include'
        })
        if(response.ok) {
            regForm.reset()
            window.location.assign('/')
        }
    } catch (error) {
        console.log('ERROR IN REGISTRATION FORM');
    }
})

