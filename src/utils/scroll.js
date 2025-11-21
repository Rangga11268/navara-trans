/**
 * Smooth Scroll Utility
 * Handles smooth scrolling with navbar offset
 */

/**
 * Smoothly scrolls to a section with offset for fixed navbar
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {number} offset - Offset from top (default: 100px for navbar)
 */
export const scrollToSection = (sectionId, offset = 100) => {
  // Remove '#' if provided
  const id = sectionId.replace('#', '');
  
  const element = document.getElementById(id);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } else {
    console.warn(`Element with id "${id}" not found`);
  }
};

/**
 * Scrolls to top of page
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Handle anchor link click with smooth scroll
 * @param {Event} e - Click event
 * @param {string} href - The href value (e.g., '#fleet')
 * @param {number} offset - Offset from top
 */
export const handleAnchorClick = (e, href, offset = 100) => {
  if (href && href.startsWith('#')) {
    e.preventDefault();
    scrollToSection(href, offset);
  }
};
