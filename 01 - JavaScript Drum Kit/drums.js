function playSound (event) {
  keySound = document.querySelectorAll(`[data-key='${event.keyCode}']`);
  if (keySound.length > 0) {
    keySound[0].classList.add('playing');
    keySound[1].currentTime = 0;
    keySound[1].play();
  }
}

function removeTransition (event) {
  if(event.propertyName !== 'transform') return;
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

document.addEventListener('keyup', playSound)
