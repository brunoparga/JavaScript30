const panels = document.querySelectorAll('.panel');

function toggleOpen () {
  this.classList.toggle('open');
  const openPanels = document.querySelectorAll('.open');
  openPanels.forEach(panel => {
    if (panel != this) {
      panel.classList.remove('open');
    }
  });
}

function toggleActive(e) {
  /* if (e.propertyName.include?('flex'))*/
  if (e.propertyName === 'font-size') {
    this.classList.toggle('open-active');
  }
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
