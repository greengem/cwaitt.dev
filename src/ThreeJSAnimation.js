import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function ThreeJSAnimation() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xffffff);
    renderer.setSize(window.innerWidth, window.innerHeight);
    const animationContainer = document.getElementById('animation-container');
    animationContainer.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Load the glTF model
    const loader = new GLTFLoader();
    loader.load('/assets/car/scene.gltf', (gltf) => {
      const model = gltf.scene;

      // Set initial rotation of the model
      model.rotation.y = Math.PI; // You can adjust the angle as needed

      // Iterate through child nodes to find meshes and apply materials
      model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // Create a basic material as a fallback
          const material = new THREE.MeshBasicMaterial();

          // Apply textures if available
          if (child.material.map) {
            material.map = child.material.map;
          }

          child.material = material;
        }
      });

      scene.add(model);

      // Start the rotation animation
      const animate = () => {
        requestAnimationFrame(animate);

        // Rotate the model
        model.rotation.y += 0.005; // Adjust the rotation speed as needed

        renderer.render(scene, camera);
      };
      animate();
    });

    return () => {
      animationContainer.removeChild(renderer.domElement); // Remove canvas from the container
      renderer.dispose();
    };
  }, []);

  return <div id="animation-container"></div>;
}

export default ThreeJSAnimation;
