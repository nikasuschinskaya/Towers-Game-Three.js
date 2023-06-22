import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const townUrl = new URL('../assets/models/metalTower.glb', import.meta.url);
const bronzeTowerUrl = new URL('../assets/models/bronzeTower.glb', import.meta.url);
const silverTowerUrl = new URL('../assets/models/silverTower.glb', import.meta.url);
const goldTowerUrl = new URL('../assets/models/goldTower.glb', import.meta.url);
const platinumTowerUrl = new URL('../assets/models/platinumTower.glb', import.meta.url);

export let metalStag;
export let bronzeStag;
export let silverStag;
export let goldenStag;
export let platinumStag;
const assetLoader = new GLTFLoader();

assetLoader.load(townUrl.href, function (gltf) {
    const model = gltf.scene;
    model.scale.set(0.02, 0.02, 0.02);
    metalStag = model;
}, undefined, function (error) {
    console.error(error);
});

assetLoader.load(bronzeTowerUrl.href, function (gltf) {
    const model = gltf.scene;
    model.scale.set(0.2, 0.21, 0.2);
    bronzeStag = model;
}, undefined, function (error) {
    console.error(error);
});

assetLoader.load(silverTowerUrl.href, function (gltf) {
    const model = gltf.scene;
    model.scale.set(0.4, 0.4, 0.4);
    silverStag = model;
}, undefined, function (error) {
    console.error(error);
});

assetLoader.load(goldTowerUrl.href, function (gltf) {
    const model = gltf.scene;
    model.scale.set(0.1, 0.06, 0.1);
    goldenStag = model;
}, undefined, function (error) {
    console.error(error);
});

assetLoader.load(platinumTowerUrl.href, function (gltf) {
    const model = gltf.scene;
    model.scale.set(3.2, 3, 3.2);
    platinumStag = model;
}, undefined, function (error) {
    console.error(error);
});