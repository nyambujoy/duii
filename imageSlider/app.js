const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let i = 0;
let timeout = 3000;

const images = [];
images.push(new Image());
images[0].src = "./imgs/main.jpg";
images.push(new Image());
images[1].src = "./imgs/mark-harpur-K2s_YE031CA-unsplash.jpg";
images.push(new Image());
images[2].src = "./imgs/lilys2.jpg";
images.push(new Image());
images[3].src = "./imgs/greenLeaf.jpg";
images.push(new Image());
images[4].src = "./imgs/moreroses.jpg";
images.push(new Image());
images[5].src = './imgs/roses.jpg';

function imageDisplay() {
    // document.querySelector(".display").src = images[i].src;

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout(imageDisplay, timeout);
}

window.onload = imageDisplay;







