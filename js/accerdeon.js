const acordeon = () => {
    const contents = document.querySelectorAll('.program-line__content')
    const alldesc = document.querySelectorAll('.program-line__descr')

    contents.forEach((elem) => {
        const title = elem.querySelector('.program-line__title')
        const decs = elem.querySelector('.program-line__descr')

        title.addEventListener('click', () => {
            alldesc.forEach(item => item.classList.remove('active'))

            decs.classList.add('active')
        })
    })
}

acordeon()