/**
 * NeuralBackground — Three.js organic mesh background
 *
 * Creates a slowly undulating wireframe plane using simplex noise
 * displacement. Intentional, not gratuitous: represents the neural
 * substrate underlying the portfolio's content.
 *
 * Performance: Uses a coarse geometry grid, runs at device pixel ratio
 * capped at 1.5, and pauses when tab is not visible.
 */

import * as THREE from 'three';

import vertexShader from '../shaders/neural-mesh.vert?raw';
import fragmentShader from '../shaders/neural-mesh.frag?raw';

export function initNeuralBackground(canvasEl) {
  // ── Renderer ──
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasEl,
    antialias: false,
    alpha: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight);

  // ── Scene & Camera ──
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(0, 0, 5);

  // ── Geometry — intentionally coarse for wireframe aesthetic ──
  const geometry = new THREE.PlaneGeometry(8, 6, 48, 36);

  // ── Material with custom shaders ──
  const uniforms = {
    uTime:         { value: 0 },
    uNoiseScale:   { value: 0.6 },
    uDisplacement: { value: 0.8 },
    uColorBase:    { value: new THREE.Color(0x111113) }, // substrate
    uColorAccent:  { value: new THREE.Color(0x1a2a10) }, // dark olive — hint of axon
    uOpacity:      { value: 0.35 },
  };

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms,
    wireframe: true,
    transparent: true,
    depthWrite: false,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -0.3;
  scene.add(mesh);

  // ── Animation loop ──
  const clock = new THREE.Clock();
  let animationId;
  let isVisible = true;

  function animate() {
    if (!isVisible) return;
    animationId = requestAnimationFrame(animate);

    uniforms.uTime.value = clock.getElapsedTime();
    renderer.render(scene, camera);
  }

  // ── Visibility API — pause when tab hidden ──
  document.addEventListener('visibilitychange', () => {
    isVisible = !document.hidden;
    if (isVisible) {
      clock.start();
      animate();
    } else {
      cancelAnimationFrame(animationId);
    }
  });

  // ── Resize handler ──
  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener('resize', onResize);

  // ── Subtle mouse parallax ──
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 0.15;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 0.1;
  });

  // Smooth follow in animation loop
  const originalAnimate = animate;
  function animateWithParallax() {
    if (!isVisible) return;
    animationId = requestAnimationFrame(animateWithParallax);

    targetX += (mouseX - targetX) * 0.02;
    targetY += (mouseY - targetY) * 0.02;
    mesh.rotation.y = targetX;
    mesh.rotation.x = -0.3 + targetY;

    uniforms.uTime.value = clock.getElapsedTime();
    renderer.render(scene, camera);
  }

  // Start
  animateWithParallax();

  // ── Cleanup ──
  return function dispose() {
    cancelAnimationFrame(animationId);
    window.removeEventListener('resize', onResize);
    geometry.dispose();
    material.dispose();
    renderer.dispose();
  };
}
