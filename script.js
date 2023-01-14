'use strict'
const hourText = document.querySelector('.hour');
const minuteText = document.querySelector('.minutes');
const secondText = document.querySelector('.seconds');
const distance = document.querySelector('#distance--text');
const speed = document.querySelector('#speed');

let btnCalculate = document.querySelector('.btn--calculate');

const calculateTime = () => {
  let distanceValue = Number(distance.value);
  let speedValue = Number(speed.value);
  let sum = distanceValue / speedValue;
  let seconds = sum * 60 * 60;
  let minute = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  let hour = Math.floor(minute / 60);
  minute = minute % 60;
  hourText.textContent = `Hour: ${hour}`;
  minuteText.textContent = `Minutes: ${minute}`;
  secondText.textContent = `Seconds: ${seconds}`;
}
btnCalculate.addEventListener('click', calculateTime);
btnCalculate.addEventListener('keydown', function(event) {
  if (event.keyCode === 16) {
    let distanceValue = Number(distance.value);
    let speedValue = Number(speed.value);
  let sum = distanceValue / speedValue;
  let seconds = sum * 60 * 60;
  let minute = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  let hour = Math.floor(minute / 60);
  minute = minute % 60;
  hourText.textContent = `Hour: ${hour}`;
  minuteText.textContent = `Minutes: ${minute}`;
  secondText.textContent = `Seconds: ${seconds}`;
  }
});