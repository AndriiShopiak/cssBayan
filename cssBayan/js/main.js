let memesBlock = document.querySelectorAll(".memes__content");
let memesBlockFirst = document.querySelector("#first-item");
memesBlockFirst.classList.add('active');

function addActive (index) {
    memesBlockFirst.style.height = '44px';
    for(let i = 0; i < memesBlock.length; i++) {
        memesBlock[i].classList.remove('active');
    }
    memesBlock[index].classList.add('active');
}
function closeItem(index) {
    memesBlock[index].classList.toggle('active');
}
for (let i = 0; i < memesBlock.length; i++) {
    memesBlock[i].addEventListener('click', () => {
        addActive(i);
    });
    memesBlock[i].addEventListener('dblclick', () => {
        closeItem(i);
    });
    
}


