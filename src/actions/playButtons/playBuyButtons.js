import { elementById } from "../../services/element.config";

export function playBuyButtonsSound(){
    elementById.createMetalTower.addEventListener('click', e => { play();});
    elementById.createBronzeTower.addEventListener('click', e => { play();});
    elementById.createSilverTower.addEventListener('click', e => { play();});
    elementById.createGoldenTower.addEventListener('click', e => { play();});
    elementById.createPlatinumTower.addEventListener('click', e => { play();});
}

function play(){
    const sound = document.querySelector('.buySound');
    sound.play();
}