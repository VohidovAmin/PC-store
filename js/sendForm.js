const sendForm = () => {
    const form = document.querySelector('.modal')

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const text = form.querySelector('input[type=text]')
        const tel = form.querySelector('input[type=tel]')
        const email = form.querySelector('input[type=email]')

        const formData = new FormData(form);
        const sendObj = Object.fromEntries(formData);


        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendObj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Сервер вернул ошибку ' + response.status);
                }
                return response.json();
            })
            .then((json) => console.log(json))
            .then(() => alert('Форма успешно отправлена!'))

            .catch((error) => {
                alert('Ошибка при отправке формы. Попробуйте позже.');
                console.error(error);
            })

            .finally(() => form.reset())
    }) 
}

sendForm()