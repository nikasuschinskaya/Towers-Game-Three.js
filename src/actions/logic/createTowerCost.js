import { game } from "../../services/resources.config";

const create_cost = 20;

export function get_create_metal_tower_cost(){
    return create_cost * game.metal_tower_level;
}
export function get_create_bronze_tower_cost(){
    return create_cost * game.bronze_tower_level * 4;
}
export function get_create_silver_tower_cost(){
    return create_cost * game.silver_tower_level * 6;
}
export function get_create_gold_tower_cost(){
    return create_cost * game.golden_tower_level * 8;
}
export function get_create_platinum_tower_cost(){
    return create_cost * game.platinum_tower_level * 10;
}