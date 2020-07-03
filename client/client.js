const log = console.log
const form = document.querySelector('form');
const loadingE = document.querySelector('.loading');
const API_URL = 'http://localhost:5000/mews'

loadingE.style.display = 'none'

form.addEventListener('submit', (e) => {
    e.preventDefault();
    log('hello');
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('conten');

    const mew = {
        name,
        content
    }
    log(mew)
    form.style.display = 'none'
    loadingE.style.display = ''

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(mew),
        headers: {
            'content-type': 'application/json'
        }
    });
})