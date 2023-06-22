import { game } from "../../services/resources.config";

export function metal_towers_upgrade_cost() {
    return game.metal_tower_count * game.metal_tower_level * 20;
}
export function bronze_towers_upgrade_cost() {
    return game.bronze_tower_count * game.bronze_tower_level * 20;
}
export function silver_towers_upgrade_cost() {
    return game.silver_tower_count * game.silver_tower_level * 20;
}
export function golden_towers_upgrade_cost() {
    return game.golden_tower_count * game.golden_tower_level * 20;
}
export function platinum_towers_upgrade_cost() {
    return game.platinum_tower_count * game.platinum_tower_level * 20;
}