class Stopwatch {
	constructor(stopwatchId, startId, pauseId, resetId, totalId) {
		this.time = 0;
		this.stopwatch = document.querySelector('#' + stopwatchId);
		this.start_btn = document.querySelector('#' + startId);
		this.pause_btn = document.querySelector('#' + pauseId);
		this.reset_btn = document.querySelector('#' + resetId);
		this.total = document.querySelector('#' + totalId);

		this.showTime = this.showTime.bind(this);
	}

	getTime() {
		return this.time;
	}

	setTime(newTime) {
		this.time = newTime;
	}

	start() {
		this.interval = setInterval(this.showTime, 1000);
		this.hideBtn([this.start_btn]);
		this.hideTotal(this.total);
		this.showBtn([this.pause_btn, this.reset_btn]);
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
		this.total.innerHTML = 'Total: ' + this.getTotal(this.time);
		this.time = 0;
		this.stopwatch.innerHTML = this.toHHMMSS(this.time);
		this.hideBtn([this.pause_btn, this.reset_btn]);
		this.showBtn([this.start_btn]);
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

	showTime = function () {
		this.setTime(this.getTime() + 1);
		this.stopwatch.innerHTML = this.toHHMMSS();
	}

	toHHMMSS() {
		let sec = this.getTime();
		console.log("in toHHMMSS " + sec);
		let hours = Math.floor(sec / 3600);
		let minutes = Math.floor((sec - hours * 3600) / 60);
		let seconds = sec - hours * 3600 - minutes * 60;

		hours = `${hours}`.padStart(2, '0');
		minutes = `${minutes}`.padStart(2, '0');
		seconds = `${seconds}`.padStart(2, '0');
		console.log("in toHHMMSS " + hours + ':' + minutes + ':' + seconds)

		return hours + ':' + minutes + ':' + seconds;
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