import { elementById } from "../../services/element.config";
import { game } from "../../services/resources.config";
import { platinum_money_per_second } from "../logic/moneyPerSecond.js";
import { get_create_platinum_tower_cost } from "../logic/createTowerCost.js";
import { platinum_towers_upgrade_cost } from "../logic/upgradeTowersCost.js";

export function platinumMoneyUpdateUI(){
    elementById.platinumMoneyCount.innerHTML = game.platinum_money;
    elementById.platinumTowerCount.innerHTML = game.platinum_tower_count;
    elementById.platinumMoneyRate.innerHTML = platinum_money_per_second() * 2;
    elementById.createPlatinumTowerCost.innerHTML = get_create_platinum_tower_cost();
    elementById.platinumTowerLevel.innerHTML = game.platinum_tower_level;
    elementById.upgradePlatinumTowerCost.innerHTML = platinum_towers_upgrade_cost();
    if(game.golden_money >= get_create_platinum_tower_cost() && game.platinum_tower_count < game.max_count_of_towers)
        elementById.createPlatinumTower.removeAttribute('disabled');
    else elementById.createPlatinumTower.setAttribute('disabled', ''); 
    if (game.golden_money >= platinum_towers_upgrade_cost() && game.platinum_tower_count > 0)
        elementById.upgradePlatinumTower.removeAttribute('disabled');
    else elementById.upgradePlatinumTower.setAttribute('disabled', '');  
}