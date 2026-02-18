/**
 * NEUROPRIMITIVE — Main entry point
 *
 * Initializes all interactive components:
 * 1. Three.js neural mesh background
 * 2. Scroll-reveal animations
 * 3. Sticky navigation highlighting
 */

import { initNeuralBackground } from './components/NeuralBackground.js';
import { initScrollReveal } from './components/ScrollReveal.js';
import { initStickyNav } from './components/StickyNav.js';

// ── Boot sequence ──

document.addEventListener('DOMContentLoaded', () => {
  // 1. WebGL background (non-blocking — runs in RAF loop)
  const canvas = document.getElementById('bg-canvas');
  if (canvas) {
    try {
      initNeuralBackground(canvas);
    } catch (e) {
      // Graceful fallback: if WebGL fails, hide canvas
      console.warn('WebGL unavailable, falling back to static background.');
      canvas.style.display = 'none';
    }
  }

  // 2. Scroll reveal
  initScrollReveal();

  // 3. Active section tracking
  initStickyNav();

  // 4. Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
