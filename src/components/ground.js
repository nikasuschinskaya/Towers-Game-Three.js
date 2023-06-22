import * as THREE from 'three';

export const planeMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(6, 6),
    new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        visible: false
    })
);
planeMesh.rotateX(-Math.PI / 2);
planeMesh.name = 'ground';

export const grid = new THREE.GridHelper(6, 6);