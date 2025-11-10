const navbar = document.querySelector('.header__nav')
const links = navbar.querySelectorAll('a')

links.forEach((links) => {
    links.addEventListener('click', (event) => {
        event.preventDefault()

        const section = document.querySelector(links.getAttribute('href'))

        if (section) {
            section.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            })
        }
    })
})