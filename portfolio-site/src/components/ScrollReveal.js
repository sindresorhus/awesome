/**
 * ScrollReveal — Intersection Observer-based reveal animations
 *
 * Watches all `.fade-up` elements and adds `.visible` class when they
 * enter the viewport. Uses a single observer instance for performance.
 * Respects `prefers-reduced-motion` by revealing everything immediately.
 */

export function initScrollReveal() {
  // Respect reduced motion preference
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  const elements = document.querySelectorAll('.fade-up');

  if (prefersReducedMotion) {
    elements.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // once only
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  elements.forEach((el) => observer.observe(el));
}
