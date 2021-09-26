class Timer {
	constructor() {
		this.time = 0;
		this.timer = document.querySelector('#time');
		console.log(this.timer)
		this.start_btn = document.querySelector('#start_btn');
		this.pause_btn = document.querySelector('#pause_btn');
		this.reset_btn = document.querySelector('#reset_btn');
		this.total = document.querySelector('#total');
		console.log('in constructor');
		// this.timer.innerText = 'hello';
	}

	start() {
		this.interval = setInterval(this.showTime, 1000);
		this.hideBtn([this.start_btn]);
		this.hideTotal(this.total);
		this.showBtn([this.pause_btn, this.reset_btn]);
		// console.log('Hello');
	}

	pause() {
		if (this.interval) {
			clearInterval(this.interval);
			this.interval = null;
			this.pause_btn.innerHTML = 'RESUME';
		} else {
			this.interval = setInterval(this.showTime, 1000);
			this.pause_btn.innerHTML = 'PAUSE';
		}
	}

	reset() {
		clearInterval(this.interval);
		this.interval = null;
		this.pause_btn.innerHTML = 'PAUSE';
		this.showTotal(this.total);
		//total.innerHTML = 'Total waktu pengerjaan: '
		this.total.innerHTML = 'Total: ' + this.getTotal(this.time);
		console.log("before reset " + this.time);
		this.time = 0;
		this.timer.innerHTML = this.toHHMMSS(this.time);
		console.log("in reset after toHHMMSS");
		this.hideBtn([this.pause_btn, this.reset_btn]);
		this.showBtn([this.start_btn]);
	}

	showTime() {
		console.log("in showtime " + this.time)
		this.time = parseInt(this.time);
		this.time += 1;
		this.time = parseInt(this.time);
		// this.timer.innerHTML = "hello";
		// this.timer.innerHTML = "this.time";
		this.timer.innerHTML = this.toHHMMSS(this.time);
		console.log("at the end of showtime")
	}

	toHHMMSS() {
		console.log("in toHHMMSS");
		let hours = Math.floor(this.time / 3600);
		let minutes = Math.floor((this.time - hours * 3600) / 60);
		let seconds = this.time - hours * 3600 - minutes * 60;

		hours = `${hours}`.padStart(2, '0');
		minutes = `${minutes}`.padStart(2, '0');
		seconds = `${seconds}`.padStart(2, '0');
		console.log(hours + ':' + minutes + ':' + seconds)

		return hours + ':' + minutes + ':' + seconds;
	}

	getTotal(time) {
		let hours = Math.floor(this.time / 3600);
		let minutes = Math.floor((this.time - hours * 3600) / 60);
		let seconds = this.time - hours * 3600 - minutes * 60;

		hours = `${hours}`;
		minutes = `${minutes}`;
		seconds = `${seconds}`;

		return hours + ' jam ' + minutes + ' menit ' + seconds + ' detik';
	}

	showBtn(btnArr) {
		btnArr.forEach((btn) => (btn.style.display = 'inline-block'));
	}

	hideBtn(btnArr) {
		btnArr.forEach((btn) => (btn.style.display = 'none'));
	}
	showTotal(total) {
		total.style.display = "block";
	}
	hideTotal(total) {
		total.style.display = "none";
	}
}