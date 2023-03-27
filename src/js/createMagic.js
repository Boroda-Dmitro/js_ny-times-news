export function createMagic(className) {
  document.querySelectorAll(`.${className}`).forEach(el => {
    el.addEventListener('click', event => {
      let content = el.nextElementSibling;

      el.parentNode.classList.toggle('active');

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}
