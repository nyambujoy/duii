const menu = document.querySelector(".more")

// console.log(menu)
const menuLinks = document.querySelector(".menu-links")

// menuLinks.addEventListener("click", () => {
//     console.log("hello")
// })

menu.addEventListener("click", () => {
    if (menuLinks.style.display === "block") {
        menuLinks.style.display = "none";
    } else {
        menuLinks.style.display = "block";
    }
});

const hamb = document.querySelectorAll(".hamb")
hamb.forEach(item => {
    item.addEventListener("click", () => {
        menuLinks.style.display = "none"

    })
})

const closeBtn = document.querySelector(".closeX")
closeBtn.addEventListener("click", () => {
    // console.log("hello")
    menuLinks.style.display = "none"
})