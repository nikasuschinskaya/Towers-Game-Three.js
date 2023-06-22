import { elementById } from "../../services/element.config";

export function playConvertButtonsSound(){
    elementById.convertTrashToMetal.addEventListener('click', e => { play();});
    elementById.convertMetalToBronze.addEventListener('click', e => { play();});
    elementById.convertBronzeToSilver.addEventListener('click', e => { play();});
    elementById.convertSilverToGold.addEventListener('click', e => { play();});
    elementById.convertGoldToPlatinum.addEventListener('click', e => { play();});
}

function play(){
    const sound = document.querySelector('.convertSound');
    sound.play();
}