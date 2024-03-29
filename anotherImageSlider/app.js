const container = document.querySelector('.container')
const images = Array.from(container.querySelectorAll('.images'))
// console.log(images[1])
const navButtons = document.querySelectorAll('.span-nav-buttons')



navButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
        // console.log(index)
        images.forEach(image => {
            image.classList.remove('images--selected')
            navButtons.forEach(button => button.classList.remove('span-nav-buttons--selected'))

            images[i].classList.add('images--selected')
            button.classList.add('span-nav-buttons--selected')
        })

    })


})


