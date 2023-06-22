import { elementById } from "../../services/element.config";
import { game } from "../../services/resources.config";
import { metal_money_per_second } from "../logic/moneyPerSecond.js";
import { get_create_metal_tower_cost } from "../logic/createTowerCost.js";
import { metal_towers_upgrade_cost } from "../logic/upgradeTowersCost.js";


export function metalMoneyUpdateUI(){
    elementById.metalMoneyCount.innerHTML = game.metal_money;
    elementById.metalTowerCount.innerHTML = game.metal_tower_count;
    elementById.metalMoneyRate.innerHTML = metal_money_per_second() * 2;
    elementById.createMetalTowerCost.innerHTML = get_create_metal_tower_cost();
    elementById.metalTowerLevel.innerHTML = game.metal_tower_level;
    elementById.upgradeMetalTowerCost.innerHTML = metal_towers_upgrade_cost();
    if(game.metal_money >= 100) elementById.convertMetalToBronze.removeAttribute('disabled');
    else elementById.convertMetalToBronze.setAttribute('disabled', ''); 
    if(game.trash_money >= get_create_metal_tower_cost() && game.metal_tower_count < game.max_count_of_towers)
        elementById.createMetalTower.removeAttribute('disabled');
    else elementById.createMetalTower.setAttribute('disabled', '');  
    if (game.trash_money >= metal_towers_upgrade_cost() && game.metal_tower_count > 0)
        elementById.upgradeMetalTower.removeAttribute('disabled');
    else elementById.upgradeMetalTower.setAttribute('disabled', '');
}