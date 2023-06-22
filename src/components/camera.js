import * as THREE from 'three';

export const camera = new THREE.PerspectiveCamera(
    6.8,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(-45, 45, 40);