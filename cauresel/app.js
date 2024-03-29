document.querySelectorAll('.carousel1').forEach(carousel => {
    const items = carousel.querySelectorAll('.carousel--item');
    const buttonHtml = Array.from(items, () => {
        return ` <span class="nav-button"></span>`

    })
    // console.log(buttonHtml)

    carousel.insertAdjacentHTML('beforeend', `
        <div class="nav">
            ${buttonHtml.join('')}
        </div>`);

    const buttons = carousel.querySelectorAll('.nav-button');
    buttons.forEach((button, i) => {
        button.addEventListener('click', () => {
            // unselect all the items
            items.forEach(item => {
                item.classList.remove('carousel--item--selected')
                buttons.forEach(button => button.classList.remove('nav-button--selected'))

                items[i].classList.add('carousel--item--selected')
                button.classList.add('nav-button--selected');
            })
        })

    })

    // select first item on page load
    items[0].classList.add('carousel--item--selected')
    buttons[0].classList.add('nav-button--selected');

})

// console.log(heyy)