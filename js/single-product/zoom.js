function zoomFunc() {
    const singleImageWrapper = document.querySelector('.single-image-wrapper')
    const singleImage = document.querySelector('#single-image')

    singleImageWrapper.addEventListener('mousemove', (e) => {
        const x = e.clientX - e.target.offsetLeft
        const y = e.clientY - e.target.offsetTop

        singleImage.style.transformOrigin = `${x}px ${y}px`
        singleImage.style.transform = "scale(3)"
    })

    singleImageWrapper.addEventListener('mouseleave', () => {
        singleImage.style.transformOrigin = "center"
        singleImage.style.transform = "scale(1)"
    })

}


export default zoomFunc()