// In-page links identify the index row even without JS. When JS is available,
// unfold the targeted project before the browser follows the fragment.
function revealProject(hash) {
  const project = document.getElementById(hash.slice(1));
  if (project?.matches('details.case')) project.open = true;
}

revealProject(location.hash);
window.addEventListener('hashchange', () => revealProject(location.hash));

document.addEventListener('click', (event) => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = event.target.closest('a[href^="#"]');
  if (link) revealProject(link.getAttribute('href'));
});
