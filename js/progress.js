const progress = () => {
    const progElement = document.querySelector('.course__progress-element progress')
    const progLabel = document.querySelector('.course__number')
    const progSection = document.querySelector('.course__progress')

    progElement.value = 0
    progLabel.textContent = '0₽'

    let start = null
    const duration = 1000
    const target = Math.floor(Math.random() * (600000 - 350000)) + 350000
    let animated = false

    function animate(timestamp) {
        if (!start) start = timestamp
        const progress = Math.min((timestamp - start) / duration, 1)

        const value = target * progress
        progElement.value = value
        progLabel.textContent = Math.floor(value).toLocaleString() + '₽'

        if (progress < 1) {
            requestAnimationFrame(animate)
        }
    }

    function checkPosition() {
        const rect = progSection.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const middleZoneTop = windowHeight / 3
        const middleZoneBottom = windowHeight * 2 / 3
        const elementCenter = rect.top + rect.height / 2

        if (!animated && elementCenter > middleZoneTop && elementCenter < middleZoneBottom) {
            animated = true
            requestAnimationFrame(animate)
            window.removeEventListener('scroll', checkPosition)
        }
    }

    window.addEventListener('scroll', checkPosition)
    checkPosition()
}

progress()
