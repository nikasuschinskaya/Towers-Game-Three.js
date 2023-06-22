import * as THREE from 'three';

export const ambientLight = new THREE.AmbientLight(0x333333);

export const spotLight = new THREE.SpotLight(0xFFFFFF);
spotLight.position.set(-30, 30, 60);
spotLight.castShadow = true;
spotLight.angle = 0.2;