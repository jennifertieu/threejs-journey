import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

// The purpose of requestAnimationFrame is to call the function provided on the next frame, calling the same function on each new frame

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// const clock = new THREE.Clock(); // DO NOT USE Clock.getDelta()

gsap.to(mesh.rotation, { duration: 10, y: Math.PI * 2, repeat: -1 });

// Animations
const tick = () => {
  // Time - using time to normalize the animation for the frame rate because some devices have different frame rates (Same Frame Rate)
  // const elapsedTime = clock.getElapsedTime();

  // // Update objects
  // camera.position.y = Math.sin(elapsedTime);
  // camera.position.x = Math.cos(elapsedTime);
  // camera.lookAt(mesh.position);

  // Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick); // calls tick indefinitely for each frame (Most devices today refresh their screens 60 times a second)
};

tick();
