import * as THREE from 'three';
import swal from 'sweetalert';
import { camera } from '../components/camera.js';
import { ambientLight, spotLight } from '../components/light.js';
import { planeMesh, grid } from '../components/ground.js';
import { highlightMesh } from '../components/highlightMesh.js';
import { Tower } from '../services/tower.config.js';
import { game } from '../services/resources.config.js';
import { elementById } from '../services/element.config.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { trashMoneyUpdateUI } from '../actions/updateUI/trashMoneyUpdateUI.js';
import { metalMoneyUpdateUI } from '../actions/updateUI/metalMoneyUpdateUI.js';
import { bronzeMoneyUpdateUI } from '../actions/updateUI/bronzeMoneyUpdateUI.js';
import { silverMoneyUpdateUI } from '../actions/updateUI/silverMoneyUpdateUI.js';
import { goldenMoneyUpdateUI } from '../actions/updateUI/goldenMoneyUpdateUI.js';
import { platinumMoneyUpdateUI } from '../actions/updateUI/platinumMoneyUpdateUI.js';
import { playbackgroundMusic } from '../actions/playButtons/playBackgroundMusic.js';
import { playBuyButtonsSound } from '../actions/playButtons/playBuyButtons.js';
import { playUpgradeButtonsSound } from '../actions/playButtons/playUpgradeButtonsSound.js';
import { playConvertButtonsSound } from '../actions/playButtons/playConvertButtonsSound.js';
import {
    trash_money_per_second,
    metal_money_per_second,
    bronze_money_per_second,
    silver_money_per_second,
    golden_money_per_second,
    platinum_money_per_second
} from '../actions/logic/moneyPerSecond.js';
import {
    get_create_metal_tower_cost,
    get_create_bronze_tower_cost,
    get_create_silver_tower_cost,
    get_create_gold_tower_cost,
    get_create_platinum_tower_cost
} from '../actions/logic/createTowerCost.js';
import {
    metal_towers_upgrade_cost,
    bronze_towers_upgrade_cost,
    silver_towers_upgrade_cost,
    golden_towers_upgrade_cost,
    platinum_towers_upgrade_cost
} from '../actions/logic/upgradeTowersCost.js';
import { metalStag, bronzeStag, silverStag, goldenStag, platinumStag } from '../components/towerLoader.js';


const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.enableZoom = false;
orbit.enablePan = false;
orbit.mouseButtons.LEFT = false;
orbit.mouseButtons.RIGHT = THREE.MOUSE.ROTATE;
orbit.enableDamping = true;
orbit.enableRotate = true;
orbit.maxPolarAngle = Math.PI / 2;

scene.add(planeMesh);
scene.add(grid);
scene.add(highlightMesh);
scene.add(ambientLight);
scene.add(spotLight);

playbackgroundMusic(); // по кнопке M
playBuyButtonsSound();
playUpgradeButtonsSound();
playConvertButtonsSound();

myTimer = setInterval(endOfTurnCalc, 2000);

const mousePosition = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
let intersects;

window.addEventListener('mousemove', function (e) {
    mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
    mousePosition.y = - (e.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mousePosition, camera);
    intersects = raycaster.intersectObjects(scene.children);
    intersects.forEach(function (intersect) {
        if (intersect.object.name === 'ground') {
            const highlightPos = new THREE.Vector3().copy(intersect.point).floor().addScalar(0.5);
            highlightMesh.position.set(highlightPos.x, 0, highlightPos.z);

            const objectExist = objects.find(function (object) {
                if (object) {
                    return (object.position.x === highlightMesh.position.x)
                        && (object.position.z === highlightMesh.position.z)
                }
            });

            if (!objectExist)
                highlightMesh.material.color.setHex(0x00FF00);
            else
                highlightMesh.material.color.setHex(0xFF0000);
        }
    });
});

onclickConvertButtons();
onclickBuyButtons();
onclickUpgradeButtons();

function endOfTurnCalc() {
    if (game.platinum_money < game.win_condition) {
        game.trash_money = game.trash_money + trash_money_per_second() * 2;
        game.metal_money += metal_money_per_second() * 2;
        game.bronze_money += bronze_money_per_second() * 2;
        game.silver_money += silver_money_per_second() * 2;
        game.golden_money += golden_money_per_second() * 2;
        game.platinum_money += platinum_money_per_second() * 2;
        updateUI();
    } else {
        winGame();
    }
}

function winGame() {
    clearTimeout(myTimer);
    const sound = document.querySelector('.winGame');
    sound.play();
    swal("Вы достигли цели!", "Вы накопили " + game.win_condition.toString() + " платиновых монет");
}

let stag;
let tower = null;
const objects = [];

window.addEventListener('mousedown', function () {
    const objectExist = objects.find(function (object) {
        if (object) {
            return (object.position.x === highlightMesh.position.x)
                && (object.position.z === highlightMesh.position.z)
        }
    });

    if (!objectExist) {
        intersects?.forEach(function (intersect) {
            if (intersect.object.name === 'ground') {
                switch (tower) {
                    case Tower.Metal:
                        stag = metalStag;
                        break;
                    case Tower.Bronze:
                        stag = bronzeStag;
                        break;
                    case Tower.Silver:
                        stag = silverStag;
                        break;
                    case Tower.Golden:
                        stag = goldenStag;
                        break;
                    case Tower.Platinum:
                        stag = platinumStag;
                        break;
                    default:
                        stag = null;
                        break;
                }
                const stagClone = stag?.clone();
                stagClone?.position.copy(highlightMesh.position);
                scene.add(stagClone);
                objects.push(stagClone);
                tower = null;
                highlightMesh.material.color.setHex(0xFF0000);
            }
        });
    }
});

function animate(time) {
    orbit.update();
    highlightMesh.material.opacity = 1 + Math.sin(time / 240);
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

function updateUI() {
    trashMoneyUpdateUI();
    metalMoneyUpdateUI();
    bronzeMoneyUpdateUI();
    silverMoneyUpdateUI();
    goldenMoneyUpdateUI();
    platinumMoneyUpdateUI();
}

function onclickBuyButtons(){
    elementById.createMetalTower.addEventListener('click', e => {
        tower = Tower.Metal;
        if (game.trash_money >= get_create_metal_tower_cost() && game.metal_tower_count < game.max_count_of_towers) {
            game.trash_money -= get_create_metal_tower_cost();
            game.metal_tower_count += 1;
            updateUI();
        }
    });
    elementById.createBronzeTower.addEventListener('click', e => {
        tower = Tower.Bronze;
        if (game.metal_money >= get_create_bronze_tower_cost() && game.bronze_tower_count < game.max_count_of_towers) {
            game.metal_money -= get_create_bronze_tower_cost();
            game.bronze_tower_count += 1;
            updateUI();
        }
    });
    elementById.createSilverTower.addEventListener('click', e => {
        tower = Tower.Silver;
        if (game.bronze_money >= get_create_silver_tower_cost() && game.silver_tower_count < game.max_count_of_towers) {
            game.bronze_money -= get_create_silver_tower_cost();
            game.silver_tower_count += 1;
            updateUI();
        }
    });
    elementById.createGoldenTower.addEventListener('click', e => {
        tower = Tower.Golden;
        if (game.silver_money >= get_create_gold_tower_cost() && game.golden_tower_count < game.max_count_of_towers) {
            game.silver_money -= get_create_gold_tower_cost();
            game.golden_tower_count += 1;
            updateUI();
        }
    });
    elementById.createPlatinumTower.addEventListener('click', e => {
        tower = Tower.Platinum;
        if (game.golden_money >= get_create_platinum_tower_cost() && game.platinum_tower_count < game.max_count_of_towers) {
            game.golden_money -= get_create_platinum_tower_cost();
            game.platinum_tower_count += 1;
            updateUI();
        }
    });
}

function onclickUpgradeButtons(){
    elementById.upgradeMetalTower.addEventListener('click', e => {
        if (game.trash_money >= metal_towers_upgrade_cost()) {
            game.trash_money -= metal_towers_upgrade_cost();
            game.metal_tower_level += 1;
            updateUI();
        }
    });
    elementById.upgradeBronzeTower.addEventListener('click', e => {
        if (game.metal_money >= bronze_towers_upgrade_cost()) {
            game.metal_money -= bronze_towers_upgrade_cost();
            game.bronze_tower_level += 1;
            updateUI();
        }
    });
    elementById.upgradeSilverTower.addEventListener('click', e => {
        if (game.bronze_money >= silver_towers_upgrade_cost()) {
            game.bronze_money -= silver_towers_upgrade_cost();
            game.silver_tower_level += 1;
            updateUI();
        }
    });
    elementById.upgradeGoldTower.addEventListener('click', e => {
        if (game.silver_money >= golden_towers_upgrade_cost()) {
            game.silver_money -= golden_towers_upgrade_cost();
            game.golden_tower_level += 1;
            updateUI();
        }
    });
    elementById.upgradePlatinumTower.addEventListener('click', e => {
        if (game.golden_money >= platinum_towers_upgrade_cost()) {
            game.golden_money -= platinum_towers_upgrade_cost();
            game.platinum_tower_level += 1;
            updateUI();
        }
    });
}

function onclickConvertButtons(){
    elementById.convertTrashToMetal.addEventListener('click', e => {
        if (game.trash_money >= 10) {
            game.trash_money -= 10;
            game.metal_money += 1;
            updateUI();
        }
    });
    elementById.convertMetalToBronze.addEventListener('click', e => {
        if (game.metal_money >= 100) {
            game.metal_money -= 100;
            game.bronze_money += 1;
            updateUI();
        }
    });
    elementById.convertBronzeToSilver.addEventListener('click', e => {
        if (game.bronze_money >= 100) {
            game.bronze_money -= 100;
            game.silver_money += 1;
            updateUI();
        }
    });
    elementById.convertSilverToGold.addEventListener('click', e => {
        if (game.silver_money >= 100) {
            game.silver_money -= 100;
            game.golden_money += 1;
            updateUI();
        }
    });
    elementById.convertGoldToPlatinum.addEventListener('click', e => {
        if (game.golden_money >= 100) {
            game.golden_money -= 100;
            game.platinum_money += 1;
            updateUI();
        }
    });
}

window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});