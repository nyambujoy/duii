const locationDiv = document.querySelector(".location")

// locationDiv.addEventListener("click", () => {
//     locationDiv.classList.toggle('open')
// })

const menu = document.querySelector(".menu");

locationDiv.addEventListener("click", () => {
    // Toggle the display property of the menu
    if (menu.style.display === "block") {
        menu.style.display = "none"; // If menu is currently visible, hide it
    } else {
        menu.style.display = "block"; // If menu is currently hidden, show it
    }
});