const timer = document.querySelector('.time');

let time = 0,
  interval;

function showTime() {
  time += 1;
  timer.innerHTML = toHHMMSS(time);
}

function start(start, pause, total, reset) {
  interval = setInterval(showTime, 1000);
  hideBtn([start]);
  hideTotal(total);
  showBtn([pause, reset]);
}

function pause(pause) {
  if (interval) {
    clearInterval(interval);
    interval = null;
    pause.innerHTML = 'CONTINUE';
  } else {
    interval = setInterval(showTime, 1000);
    pause.innerHTML = 'PAUSE';
  }
}

function reset(start, pause, total, reset) {
  clearInterval(interval);
  interval = null;
  pause.innerHTML = 'PAUSE';
  showTotal(total);
  total.innerHTML = 'Total : ' + toTotal(time) ;
  time = 0;
  timer.innerHTML = toHHMMSS(time);
  hideBtn([pause, reset]);
  showBtn([start]);
}

function toHHMMSS(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = time - hours * 3600 - minutes * 60;

  hours = `${hours}`.padStart(2, '0');
  minutes = `${minutes}`.padStart(2, '0');
  seconds = `${seconds}`.padStart(2, '0');

  return hours + ':' + minutes + ':' + seconds;
}

function toTotal(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - hours * 3600) / 60);
    let seconds = time - hours * 3600 - minutes * 60;
  
    hours = `${hours}`;
    minutes = `${minutes}`;
    seconds = `${seconds}`;
  
    return hours + ' Hours ' + minutes + ' Minutes ' + seconds + ' Seconds';
}

function showBtn(btnArr) {
  btnArr.forEach((btn) => (btn.style.display = 'inline-block'));
}
function hideBtn(btnArr) {
  btnArr.forEach((btn) => (btn.style.display = 'none'));
}
function showTotal(Total) {
    Total.style.display = "block";
}
function hideTotal(Total) {
    Total.style.display = "none";
}

