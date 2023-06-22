import { elementById } from "../../services/element.config";
import { game } from "../../services/resources.config";
import { bronze_money_per_second } from "../logic/moneyPerSecond.js";
import { get_create_bronze_tower_cost } from "../logic/createTowerCost.js";
import { bronze_towers_upgrade_cost } from "../logic/upgradeTowersCost.js";

export function bronzeMoneyUpdateUI(){
    elementById.bronzeMoneyCount.innerHTML = game.bronze_money;
    elementById.bronzeTowerCount.innerHTML = game.bronze_tower_count;
    elementById.bronzeMoneyRate.innerHTML = bronze_money_per_second() * 2;
    elementById.createBronzeTowerCost.innerHTML = get_create_bronze_tower_cost();
    elementById.bronzeTowerLevel.innerHTML = game.bronze_tower_level;
    elementById.upgradeBronzeTowerCost.innerHTML = bronze_towers_upgrade_cost();
    if(game.bronze_money >= 100) elementById.convertBronzeToSilver.removeAttribute('disabled');
    else elementById.convertBronzeToSilver.setAttribute('disabled', ''); 
    if(game.metal_money >= get_create_bronze_tower_cost() && game.bronze_tower_count < game.max_count_of_towers)
        elementById.createBronzeTower.removeAttribute('disabled');
    else elementById.createBronzeTower.setAttribute('disabled', ''); 
    if (game.metal_money >= bronze_towers_upgrade_cost() && game.bronze_tower_count > 0)
        elementById.upgradeBronzeTower.removeAttribute('disabled');
    else elementById.upgradeBronzeTower.setAttribute('disabled', '');
}