const modalWindow = document.querySelector('.modal')
const modalClose = document.querySelector('.modal_close')
const modalButton = document.querySelectorAll('.modal_button')
const body = document.querySelector('body') 

modalButton.forEach((item) => {
    item.addEventListener('click', () => {
        modalWindow.style.display = 'flex';
        body.classList.add('noscroll')
    })
})

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal_inner')

    if (!isModal) {
        modalWindow.style.display = 'none'
        body.classList.remove('noscroll')
    } 
})

modalClose.addEventListener('click', () => {
    modalWindow.style.display = 'none'
    body.classList.remove('noscroll')
})