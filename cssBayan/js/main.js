let memesBlock = document.querySelectorAll(".memes__content");
let closeSvg = document.querySelectorAll("svg");
let memesBlockFirst = document.querySelector("#first-item");
memesBlockFirst.style.height = '500px';

function addActive (index) {
    memesBlockFirst.style.height = '44px';
    for(let i = 0; i < memesBlock.length; i++) {
        memesBlock[i].classList.remove('active');
    }
    memesBlock[index].classList.toggle('active');
}
function closeItem(index) {
    memesBlock[index].classList.toggle('active');
}
for (let i = 0; i < memesBlock.length; i++) {
    memesBlock[i].addEventListener('click', () => {
        addActive(i);
    });
    
}

