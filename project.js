const thumbnails = [...document.querySelectorAll('.project-photos button')];
const lightbox = document.querySelector('#lightbox');
const enlarged = lightbox.querySelector('img');
const count = document.querySelector('#image-count');
const closeButton = document.querySelector('#close-image');
let current = 0;
let opener;

function showImage(index) {
  current = (index + thumbnails.length) % thumbnails.length;
  const original = thumbnails[current].querySelector('img');
  enlarged.src = original.src;
  enlarged.alt = original.alt;
  count.textContent = `${current + 1} / ${thumbnails.length}`;
}

thumbnails.forEach((button, index) => {
  button.addEventListener('click', () => {
    opener = button;
    showImage(index);
    lightbox.showModal();
    closeButton.focus();
  });
});

document.querySelector('#prev-image').addEventListener('click', () => showImage(current - 1));
document.querySelector('#next-image').addEventListener('click', () => showImage(current + 1));
closeButton.addEventListener('click', () => lightbox.close());
lightbox.addEventListener('close', () => opener?.focus());
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    const bounds = lightbox.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) lightbox.close();
  }
});
lightbox.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') showImage(current - 1);
  if (event.key === 'ArrowRight') showImage(current + 1);
});
