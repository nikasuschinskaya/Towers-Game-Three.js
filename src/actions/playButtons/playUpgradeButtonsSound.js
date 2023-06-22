import { elementById } from '../../services/element.config';

export function playUpgradeButtonsSound(){
    elementById.upgradeMetalTower.addEventListener('click', e => { play();});
    elementById.upgradeBronzeTower.addEventListener('click', e => { play();});
    elementById.upgradeSilverTower.addEventListener('click', e => { play();});
    elementById.upgradeGoldTower.addEventListener('click', e => { play()});
    elementById.upgradePlatinumTower.addEventListener('click', e => { play();});
}

function play(){
    const sound = document.querySelector('.upgradeSound');
    sound.play();
}