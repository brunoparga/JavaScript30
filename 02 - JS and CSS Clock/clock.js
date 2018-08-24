const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate () {
  const now = new Date();
  const secondsDegrees = (now.getSeconds() * 6) + 90;
  const minutesDegrees = (now.getMinutes() * 6) + 90;
  const hoursDegrees = (now.getHours() * 30) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000)
