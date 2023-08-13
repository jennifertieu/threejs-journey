import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const group = new THREE.Group();
group.position.y = 1;
group.scale.y = 2;
group.rotation.y = 1;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.set(-2, 0, 0);
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.set(2, 0, 0);
group.add(cube3);

// Single Cube
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// // mesh.position.y = 1; // can declare position anywhere before render and after variable declaration
// // mesh.position.x = 0.7;
// // mesh.position.z = 1;
// mesh.position.set(0.7, -0.6, 1);

// // Scale
// // mesh.scale.x = 2;
// // mesh.scale.y = 0.5;
// // mesh.scale.z = 0.5;
// mesh.scale.set(2, 0.5, 0.5);

// // Rotation - instance of Euler
// // when you change the x, y, and z properties you can image putting a stick through
// // your objects center in the axis's direction and then rotating that object on the stick
// /* Be careful when rotate an axis because you might rotate another axis and can get a strange result where the axis is not rotating (gimbal lock)
// To help with this, you can change the order by using the reorder method*/
// mesh.rotation.reorder("YXZ"); // set before rotation
// mesh.rotation.y = Math.PI * 0.25;
// mesh.rotation.x = Math.PI * 0.25;

// Axes helper - help position objects
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// mesh.position.normalize(); // take length of the vector and reduce to one
// console.log(mesh.position.length()); // 1

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// console.log(mesh.position.distanceTo(camera.position));
// camera.lookAt(mesh.position);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
