const container = document.querySelector('.container')
const images = Array.from(container.querySelectorAll('.images'))
// console.log(images[1])
const navButtons = document.querySelectorAll('.span-nav-buttons')
let currentIndex = 0






function showNextImage() {
    images[currentIndex].classList.remove('images--selected')
    navButtons[currentIndex].classList.remove('span-nav-buttons--selected')


    // Increment the index or loop back to the beginning if reached the end
    currentIndex = (currentIndex + 1) % images.length

    images[currentIndex].classList.add('images--selected')
    navButtons[currentIndex].classList.add('span-nav-buttons--selected')

}

function setAutochange() {
    setInterval(showNextImage, 3000)
}

navButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
        currentIndex = i
        showNextImage()

    })


})

setAutochange()