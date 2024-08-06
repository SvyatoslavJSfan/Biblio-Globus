const addCommBtn = document.querySelector(".add-comment")
const showCommBtn = document.querySelector(".show-comments")
const commentsDiv = document.querySelector(".book-comments")


if (addCommBtn) {
  addCommBtn.addEventListener("click", (event) => {
    const wrapper = event.target.parentNode.parentNode;
    const bookId = event.target.parentNode.parentNode.dataset.id;
    const div = document.createElement("div");
    const filling = `
        <form name='add-comment-form'>
            <textarea name="comment"></textarea>
            <button type='submit'>СОХРАНИТЬ</button>
        </form>
        `;
    div.innerHTML = filling;
    wrapper.append(div)

    const commentForm = document.forms['add-comment-form']
    commentForm.addEventListener('submit', async(event) => {
        event.preventDefault()
        console.log(event.target.parentNode);
        const formData = Object.fromEntries(new FormData(commentForm))
        formData['book_id'] = bookId

        const response = await fetch('/book/comment', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if(response.ok) {
            alert('Комментарий добавлен.')
            event.target.parentNode.remove()
        }
    })
  });
}

if(showCommBtn) {
    showCommBtn.addEventListener('click', async (event) => {
        const div = document.createElement('div')
        if (event.target.innerText === 'Посмотреть комментарии') {
        const bookId = event.target.dataset.id
        try {
            const response = await fetch(`/book/${bookId}/show-comments`)
            if (response.ok) {
                const arr = await response.json()
                let commentsStr = ``
                if (arr.length !== 0) {
                    arr.forEach(comm => {
                        commentsStr += `${comm.comment}\n`
                })
                    div.innerHTML = `
                    <h1>Комментарии:</h1>
                    ${commentsStr}
                    `
                    console.log(div);
                    commentsDiv.appendChild(div)
                    event.target.innerText = 'Скрыть комментарии'
                } else {
                    div.innerHTML = `<h1>Комментариев пока нет:</h1>`
                    event.target.innerText = 'Скрыть комментарии'
                }
                
            }
        } catch (error) {
            console.log('err', error);
        }
        } else {
            commentsDiv.innerHTML = ''
            event.target.innerText = 'Посмотреть комментарии'
        }
        
    })
}
