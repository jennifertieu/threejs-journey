// Scene - like a container, we put objects, models, lights, etc in it

const scene = new THREE.Scene();

// Mesh - combination of a geometry (the shape) and a material (how it looks)

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "#ff0000" });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

const sizes = {
  height: 600,
  width: 800,
};
// Camera - serves as a point of view
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); // view amplitude/field of view, aspect ratio
camera.position.z = 3; // we need to move the camera backward, its is currently inside the cube
// camera.position.x = 2;
scene.add(camera);

const canvas = document.querySelector("canvas.webgl");
// Renderer - render the scene from the camera point of view, result drawn into a canvas
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height); // size the renderer

renderer.render(scene, camera);
