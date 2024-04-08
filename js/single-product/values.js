function valuesFunc() {
    const valuesDOM = document.querySelectorAll('.values-list span')

    valuesDOM.forEach(value => {
        value.addEventListener('click', () => {
            const valueDOMActive = document.querySelector('.values-list span.active')
            valueDOMActive.classList.remove('active')
            value.classList.add('active')
        })
    })
}


export default valuesFunc()