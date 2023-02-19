'use strict'
const hourText = document.querySelector('.hour');
const minuteText = document.querySelector('.minutes');
const secondText = document.querySelector('.seconds');
let btnCalculate = document.querySelector('.btn--calculate');
const distance = document.querySelector('.distance');
const speed = document.querySelector('.speed');
const brake = document.getElementById('brake-select'); 
const dataBrake = document.querySelector('.dataBrake')


let dataForCalculateTime = {
	distance: 0,
	speed: 0,
	driverBrake: 0,
	time: function () {
		let time = this.distance / this.speed;
		return   time;
	},
	seconds: function() {
			let seconds = Math.floor((this.time() * 60 * 60) + this.driverBrake);
			return seconds
		},
	minute: function () {
		let minute = (Math.floor(this.seconds() / 60));	
		return minute
	},
	hour: function() {
		let hour = Math.floor(this.minute() / 60)
		return hour;
	}
}

function gettextContent() {
	dataForCalculateTime.distance = Number(distance.value);
	dataForCalculateTime.speed = Number(speed.value);
	let hour = dataForCalculateTime.hour();
	let minute = Math.floor(dataForCalculateTime.minute() % 60);
	let seconds = Math.floor(dataForCalculateTime.seconds() % 60);
	let brake = dataForCalculateTime.driverBrake
	hourText.textContent = `Hour: ${hour}`;
  	minuteText.textContent = `Minutes: ${minute}`;
  	secondText.textContent = `Seconds: ${seconds}`;
}

// let timeData = {}
// timeLocal.addEventListener('change', function ()  {
// 	let dataTime = timeLocal.value;
// 	timeData.year = parseInt(dataTime.slice(0, 4));
// 	timeData.month = parseInt(dataTime.slice(5, 7));
// 	timeData.day = parseInt(dataTime.slice(8, 10));
// 	timeData.hour = parseInt(dataTime.slice(11, 13));
// 	timeData.minutes = parseInt(dataTime.slice(14, 16));
	
// })


// brakeLong.addEventListener('change', function() {
// 		console.log(brake.value);
// })

brake.addEventListener('change', function() {
	let driverBrake = Number(brake.value);
	driverBrake = driverBrake === 47 ? driverBrake * 60 : driverBrake * 3600;
	dataForCalculateTime.driverBrake = driverBrake;
})
btnCalculate.addEventListener('click', gettextContent);
