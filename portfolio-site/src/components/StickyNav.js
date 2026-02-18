/**
 * StickyNav — Highlights active section in navigation
 *
 * Uses Intersection Observer to track which section is in view
 * and applies an `active` class to the corresponding nav link.
 */

export function initStickyNav() {
  const navLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section[id]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === `#${id}`
            );
          });
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: '-80px 0px -50% 0px',
    }
  );

  sections.forEach((section) => observer.observe(section));
}
