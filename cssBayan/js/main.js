let memesBlock = document.querySelectorAll(".memes__content");
let closeSvg = document.querySelectorAll("svg");
for (let i = 1; i < memesBlock.length; i++) {
    memesBlock[i].addEventListener('mouseenter', () => {
        memesBlock[i].style.height = '500px';
        closeSvg[i].style.transform = 'rotate(45deg)';
    });
    memesBlock[i].addEventListener('mouseleave', () => {
        memesBlock[i].style.height = '44px';
        closeSvg[i].style.transform = 'rotate(0deg)';
    });
    closeSvg[i].addEventListener('click', () => {
        memesBlock[i].style.height = '44px';
        closeSvg[i].style.transform = 'rotate(0deg)';
    });
}
closeSvg[0].addEventListener('click', () => {
    memesBlock[0].style.height = '44px';
    closeSvg[0].style.transform = 'rotate(0deg)';
    for (let i = 0; i < memesBlock.length; i++) {
        memesBlock[i].addEventListener('mouseenter', () => {
            memesBlock[i].style.height = '500px';
            closeSvg[i].style.transform = 'rotate(45deg)';
        });
        memesBlock[i].addEventListener('mouseleave', () => {
            memesBlock[i].style.height = '44px';
            closeSvg[i].style.transform = 'rotate(0deg)';
        });
        closeSvg[i].addEventListener('click', () => {
            memesBlock[i].style.height = '44px';
            closeSvg[i].style.transform = 'rotate(0deg)';
        });
    }
});