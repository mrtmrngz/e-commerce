function colorsFunc() {
    const colorsDOM = document.querySelectorAll('.color-wrapper')

    colorsDOM.forEach(color => {
        color.addEventListener('click', () => {
            const colorActive = document.querySelector('.color-wrapper.active')
            colorActive.classList.remove('active')
            color.classList.add('active')
        })
    })
}


export default colorsFunc()