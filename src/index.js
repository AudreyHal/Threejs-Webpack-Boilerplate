import './styles.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let camera, scene, renderer, controls;

init();
animate();
window.addEventListener( 'resize', onWindowResize, false );

function init() {
  // Renderer
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );		
  document.body.appendChild( renderer.domElement );
  
  // Camera
  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.z = 40;

  scene = new THREE.Scene(); 
  renderer.render(scene, camera);

  // Initialize controls
  controls = new OrbitControls(camera, renderer.domElement)
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {
  // Update controls
  controls.update();
  // Call animate on next frame
  requestAnimationFrame( animate );
   // Render
  renderer.render( scene, camera );
}

