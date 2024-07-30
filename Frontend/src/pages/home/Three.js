import * as THREE from "three";

// scene
const scene = new THREE.Scene();

// Camera

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerHeight / window.innerWidth,
  1,
  1000
);

// Renderer

export const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
