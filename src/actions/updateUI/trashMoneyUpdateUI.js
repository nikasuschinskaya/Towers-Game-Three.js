import { elementById } from "../../services/element.config";
import { game } from "../../services/resources.config";
import { trash_money_per_second } from '../logic/moneyPerSecond.js';

export function trashMoneyUpdateUI(){
    elementById.trashMoneyCount.innerHTML = game.trash_money.toString();
    elementById.trashMoneyRate.innerHTML = trash_money_per_second() * 2;
    if(game.trash_money >= 10) elementById.convertTrashToMetal.removeAttribute('disabled');
    else elementById.convertTrashToMetal.setAttribute('disabled', ''); 
}