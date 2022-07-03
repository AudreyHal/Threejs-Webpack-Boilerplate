import './styles.css';
import * as THREE from 'three/build/three.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
let camera, scene, renderer, controls, world, cloud;


init();
animate();
window.addEventListener( 'resize', onWindowResize, false );

function init() {
  renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );		
  document.body.appendChild( renderer.domElement );
  
  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.z = 40;

  scene = new THREE.Scene(); 
  renderer.render(scene, camera);

  const worldTexture = new THREE.TextureLoader().load('world.jpeg'); // todo: Add static path to image to webpack loader
  const worldGeometry = new THREE.SphereBufferGeometry(10, 40, 40);
  const worldMaterial = new THREE.MeshBasicMaterial({ map: worldTexture})
  world = new THREE.Mesh(worldGeometry, worldMaterial);
  scene.add(world);

  const cloudTexture = new THREE.TextureLoader().load('clouds.png'); 
  const cloudGeometry = new THREE.SphereBufferGeometry(10.1, 40, 40);
  const cloudMaterial = new THREE.MeshBasicMaterial({ map: cloudTexture, transparent: true})
  cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
  scene.add(cloud);

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
  // Rotate objects
  world.rotation.y += 0.0005;
  cloud.rotation.y -= 0.001;
  renderer.render( scene, camera );
}

