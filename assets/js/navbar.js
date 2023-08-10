document.querySelectorAll('.nav-link').forEach(link => {
  if (link.href?.replaceAll('#', '') === window.location.href) {
    link.setAttribute('aria-current', 'page')
  }
})