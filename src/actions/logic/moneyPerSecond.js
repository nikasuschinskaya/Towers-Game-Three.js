import { game } from "../../services/resources.config";

export function trash_money_per_second() {  
    return 4;
}
export function metal_money_per_second() {
    return game.metal_tower_count * game.metal_tower_level;
}
export function bronze_money_per_second() {
    return game.bronze_tower_count * game.bronze_tower_level;
}
export function silver_money_per_second() {
    return game.silver_tower_count * game.silver_tower_level;
}
export function golden_money_per_second() {
    return game.golden_tower_count * game.golden_tower_level;
}
export function platinum_money_per_second() {
    return game.platinum_tower_count * game.platinum_tower_level;
}