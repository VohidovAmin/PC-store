const modals = () => {
    const modalBtn = document.querySelectorAll('.course__button, .modal__button')
    const modal = document.querySelector('.modal')

    const closeBtn = document.createElement('div')
    closeBtn.classList.add('modal__close-js')
    closeBtn.textContent = '✖'

    const modalInner = document.querySelector('.modal__inner')
    modalInner.prepend(closeBtn)

    modalBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'flex'
        })
    })

    modal.addEventListener('click', (event) => {
        const modalContent = event.target.closest('.modal__inner')

        if (!modalContent) {
            modal.style.display = ''
        }
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = ''
    })
}

modals()