// const timer = document.querySelector('.time');
// const timer2 = document.querySelector('.time2');

let time = 0,
  interval;

function showTime(tim) {
  time += 1;
  tim.innerHTML = toHHMMSS(time);
  tim.innerHTML = toHHMMSS(time);
}

function start(startx, pause, total, reset, tim) {
  interval = setInterval(function() { showTime(tim); }, 1000);
  hideBtn([startx]);
  hideTotal(total);
  showBtn([pause, reset]);
}

function pause(pausex, tim) {
  if (interval) {
    clearInterval(interval);
    interval = null;
    pausex.innerHTML = 'CONTINUE';
  } else {
    interval = setInterval(function() { showTime(tim); }, 1000);
    pausex.innerHTML = 'PAUSE';
  }
}

function reset(start, pause, total, resetx, tim) {
  clearInterval(interval);
  interval = null;
  pause.innerHTML = 'PAUSE';
  showTotal(total);
  total.innerHTML = 'Total : ' + toTotal(time) ;
  time = 0;
  tim.innerHTML = toHHMMSS(time);
  hideBtn([pause, resetx]);
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

