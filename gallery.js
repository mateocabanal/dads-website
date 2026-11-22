const filters = [...document.querySelectorAll('[data-filter]')];
const tiles = [...document.querySelectorAll('.tile')];
const count = document.querySelector('#project-count');
filters.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    let visible = 0;
    for (const tile of tiles) {
      tile.hidden = filter !== 'All work' && tile.dataset.category !== filter;
      if (!tile.hidden) visible += 1;
    }
    count.textContent = visible === 1 ? '1 project' : `${visible} projects`;
  });
});

const viewButtons = [...document.querySelectorAll('[data-view]')];
const gallery = document.querySelector('#gallery');
viewButtons.forEach((button) => {
  button.addEventListener('click', () => {
    viewButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    gallery.classList.toggle('list', button.dataset.view === 'list');
  });
});

function followLegacyProjectLink() {
  const id = location.hash.slice(1);
  if (id === 'archive' || /^collection-(capu|voa|studios)$/.test(id)) {
    location.replace('#work');
    return;
  }
  const project = tiles.map((tile) => tile.querySelector('a'))
    .find((link) => link.getAttribute('href') === `projects/${id}.html`);
  if (project) location.replace(project.href);
}

followLegacyProjectLink();
window.addEventListener('hashchange', followLegacyProjectLink);
