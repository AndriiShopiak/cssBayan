let memesBlock = document.querySelectorAll(".memes__content");
let memesImages = document.querySelectorAll(".mems__content__image");
let memesBlockFirst = document.querySelector("#first-item");
let memesBlockName = document.querySelectorAll(".memes__content__flex .memes__content__top");
let closeIcons = document.querySelectorAll("svg");
memesBlockFirst.classList.add('active');

function addActive (index) {
    memesBlockFirst.style.height = '3rem';
    for(let i = 0; i < memesBlock.length; i++) {
        memesBlock[i].classList.remove('active');
    }
    memesBlock[index].classList.add('active');
}
function closeItem(index) {
    memesBlock[index].classList.remove('active');
}
for (let i = 0; i < memesBlock.length; i++) {
    memesImages[i].addEventListener('click', () => {
        addActive(i);
    });
    memesBlockName[i].addEventListener('click', () => {
        addActive(i);
    });
    closeIcons[i].addEventListener('click', () => {
        closeItem(i);
    });
    
}


