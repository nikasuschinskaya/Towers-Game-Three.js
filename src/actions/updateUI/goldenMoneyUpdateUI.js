import { elementById } from "../../services/element.config";
import { game } from "../../services/resources.config";
import { golden_money_per_second } from "../logic/moneyPerSecond.js";
import { get_create_gold_tower_cost } from "../logic/createTowerCost.js";
import { golden_towers_upgrade_cost } from "../logic/upgradeTowersCost.js";

export function goldenMoneyUpdateUI(){
    elementById.goldenMoneyCount.innerHTML = game.golden_money;
    elementById.goldenTowerCount.innerHTML = game.golden_tower_count;
    elementById.goldenMoneyRate.innerHTML = golden_money_per_second() * 2;
    elementById.createGoldenTowerCost.innerHTML = get_create_gold_tower_cost();
    elementById.goldenTowerLevel.innerHTML = game.golden_tower_level;
    elementById.upgradeGoldenTowerCost.innerHTML = golden_towers_upgrade_cost();
    if(game.golden_money >= 100) elementById.convertGoldToPlatinum.removeAttribute('disabled');
    else elementById.convertGoldToPlatinum.setAttribute('disabled', ''); 
    if(game.silver_money >= get_create_gold_tower_cost() && game.golden_tower_count < game.max_count_of_towers)
        elementById.createGoldenTower.removeAttribute('disabled');
    else elementById.createGoldenTower.setAttribute('disabled', ''); 
    if (game.silver_money >= golden_towers_upgrade_cost() && game.golden_tower_count > 0)
        elementById.upgradeGoldTower.removeAttribute('disabled');
    else elementById.upgradeGoldTower.setAttribute('disabled', '');  
}