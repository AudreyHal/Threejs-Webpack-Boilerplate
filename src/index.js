import './styles.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Renderer
const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );		
document.body.appendChild( renderer.domElement );

// Camera
const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.z = 40;

// Scene
const scene = new THREE.Scene(); 
renderer.render(scene, camera);

// Example of adding an object to the scene
const worldTexture = new THREE.TextureLoader().load('textures/world.jpeg'); 
const worldGeometry = new THREE.SphereBufferGeometry(10, 40, 40);
const worldMaterial = new THREE.MeshBasicMaterial({map: worldTexture})
const world = new THREE.Mesh(worldGeometry, worldMaterial);
scene.add(world);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
};
window.addEventListener( 'resize', onWindowResize, false );

function animate() {
  // Update controls
  controls.update();
  // Call animate on next frame
  requestAnimationFrame( animate );
   // Render
  renderer.render( scene, camera );
}
animate();
