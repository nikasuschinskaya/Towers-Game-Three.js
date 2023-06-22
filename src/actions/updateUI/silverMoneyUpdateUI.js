import { elementById } from "../../services/element.config";
import { game } from "../../services/resources.config";
import { silver_money_per_second } from "../logic/moneyPerSecond.js";
import { get_create_silver_tower_cost } from "../logic/createTowerCost.js";
import { silver_towers_upgrade_cost } from "../logic/upgradeTowersCost.js";

export function silverMoneyUpdateUI(){
    elementById.silverMoneyCount.innerHTML = game.silver_money;
    elementById.silverTowerCount.innerHTML = game.silver_tower_count;
    elementById.silverMoneyRate.innerHTML = silver_money_per_second() * 2;
    elementById.createSilverTowerCost.innerHTML = get_create_silver_tower_cost();
    elementById.silverTowerLevel.innerHTML = game.silver_tower_level;
    elementById.upgradeSilverTowerCost.innerHTML = silver_towers_upgrade_cost();
    if(game.silver_money >= 100) elementById.convertSilverToGold.removeAttribute('disabled');
    else elementById.convertSilverToGold.setAttribute('disabled', ''); 
    if(game.bronze_money >= get_create_silver_tower_cost() && game.silver_tower_count < game.max_count_of_towers)
        elementById.createSilverTower.removeAttribute('disabled');
    else elementById.createSilverTower.setAttribute('disabled', ''); 
    if (game.bronze_money >= silver_towers_upgrade_cost() && game.silver_tower_count > 0)
        elementById.upgradeSilverTower.removeAttribute('disabled');
    else elementById.upgradeSilverTower.setAttribute('disabled', ''); 
}