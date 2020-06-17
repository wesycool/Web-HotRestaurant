// onClick Function for Reserve Button
document.querySelector('#reserve').addEventListener('click', async function(){
    const bodyContent = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        phone: document.querySelector('#phone').value
    }
    
    await fetch('/edit', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(bodyContent)
    })
})

