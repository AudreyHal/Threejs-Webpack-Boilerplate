import './styles.css';
import * as THREE from 'three/build/three.module.js';

let camera, scene, renderer;


init();
animate();
window.addEventListener( 'resize', onWindowResize, false );

function init() {
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );		
  document.body.appendChild( renderer.domElement );
  
  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.z = 40;

  scene = new THREE.Scene(); 
  renderer.render(scene, camera);

}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );

}

