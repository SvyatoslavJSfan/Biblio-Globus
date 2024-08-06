const loginForm = document.forms['login']



loginForm.addEventListener('submit', async(event) => {
    event.preventDefault()
    try {
        const formData = Object.fromEntries(new FormData(loginForm))
        const response = await fetch('/login', {
            method: 'POST',
            headers:  {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData),
            credentials: 'include'
        })
        
        if(response.ok) {
            loginForm.reset()
            window.location.assign('/')
        }
    } catch (error) {
        console.log('ERROR IN LOGIN FORM');
    }
})


