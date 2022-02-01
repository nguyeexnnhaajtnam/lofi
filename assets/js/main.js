// BACKGROUND
var changeDayNight = document.getElementById("checkbox");
var fullScreen = document.getElementById("full-screen");
var pauseBtn = document.getElementById("pause-btn");
var playBtn = document.getElementById("play-btn");
var configBtn = document.getElementById("config-btn");
var infoBtn = document.getElementById("info-btn");
var infoModal = document.getElementById("info-modal");
var closeInfoModal = document.getElementById("close-info-modal");
var elem = document.documentElement;
var isRender = false;
// DAY
var day = document.getElementById("day");
var dayRainy = document.getElementById("day-rainy");
// NIGHT
var night = document.getElementById("night");
var nightRainy = document.getElementById("night-rainy");
// JAZZ
var jazzBtn = document.getElementById("jazz-btn");
var jazzAudio = document.getElementById("jazz");
var jazzIcon = document.getElementById("jazz-icon");
var jazzContent = document.getElementById("jazz-content");
// CHILL
var chillBtn = document.getElementById("chill-btn");
var chillAudio = document.getElementById("chill");
var chillIcon = document.getElementById("chill-icon");
var chillContent = document.getElementById("chill-content");
// SLEEP
var sleepBtn = document.getElementById("sleep-btn");
var sleepAudio = document.getElementById("sleep");
var sleepIcon = document.getElementById("sleep-icon");
var sleepContent = document.getElementById("sleep-content");
// NOISE
var rainNoise = document.getElementById("rain-noise");
var trafficNoise = document.getElementById("traffic-noise");
// VOLUME
// .chrome styling Vanilla JS

const slider = document.getElementById("volume-input");
const min = slider.min;
const max = slider.max;
const value = slider.value;

slider.style.background = `linear-gradient(to right, var(--light-color) 0%, var(--light-color) ${
  ((value - min) / (max - min)) * 100
}%, var(--semi-black-color) ${
  ((value - min) / (max - min)) * 100
}%, var(--semi-black-color) 100%)`;

slider.oninput = function () {
  this.style.background = `linear-gradient(to right, var(--light-color) 0%, var(--light-color) ${
    ((this.value - this.min) / (this.max - this.min)) * 100
  }%, var(--semi-black-color) ${
    ((this.value - this.min) / (this.max - this.min)) * 100
  }%, var(--semi-black-color) 100%)`;
};
// Day/Night button
changeDayNight.onclick = function () {
  setTimeout(function () {
    if (day.style.display == "block") {
      night.style.display = "block";
      day.style.display = "none";
      dayRainy.style.display = "none";
      nightRainy.style.display = "none";
    } else if (dayRainy.style.display == "block") {
      nightRainy.style.display = "block";
      night.style.display = "none";
      day.style.display = "none";
      dayRainy.style.display = "none";
    } else if (nightRainy.style.display == "block") {
      dayRainy.style.display = "block";
      nightRainy.style.display = "none";
      night.style.display = "none";
      day.style.display = "none";
    } else {
      day.style.display = "block";
      dayRainy.style.display = "none";
      nightRainy.style.display = "none";
      night.style.display = "none";
    }
  }, 1000);
};

// Rain Button + Traffic Button
function Rain() {
  changeDayNight.checked == false ? changeRainDay() : changeRainNight();
}

function changeRainDay() {
  setTimeout(function () {
    if (day.style.display == "block") {
      rainNoise.play();
      day.style.display = "none";
      dayRainy.style.display = "block";
      night.style.display = "none";
      nightRainy.style.display = "none";
    } else {
      rainNoise.pause();
      night.style.display = "none";
      nightRainy.style.display = "none";
      dayRainy.style.display = "none";
      day.style.display = "block";
    }
  }, 500);
}

function changeRainNight() {
  setTimeout(function () {
    if (night.style.display == "block") {
      night.style.display = "none";
      nightRainy.style.display = "block";
      rainNoise.play();
    } else {
      night.style.display = "block";
      rainNoise.pause();
      nightRainy.style.display = "none";
    }
  }, 500);
}

function Traffic() {
  if (isRender == false) {
    trafficNoise.play();
    isRender = true;
  } else {
    trafficNoise.pause();
    isRender = false;
  }
}

// Fullscreen button
fullScreen.onclick = function openFullscreen() {
  if (isRender) {
    elem.requestFullscreen();
    isRender = false;
  } else {
    document.exitFullscreen();
    isRender = true;
  }
};

// Config Modal
configBtn.onclick = function openConfigModal() {
  var configModal = document.getElementById("config-modal");
  var topCorner = document.getElementById("corner-top");

  if (configModal.style.opacity == "0") {
    configModal.style.opacity = "1";
    topCorner.style.display = "block";
    configBtn.style.backgroundColor = "var(--black-color)";
  } else {
    configModal.style.opacity = "0";
    topCorner.style.display = "none";
    configBtn.style.removeProperty("background");
  }
};

jazzBtn.onclick = function () {
  jazzAudio.play();
  jazzIcon.style.color = "var(--light-color)";
  jazzContent.style.color = "var(--white-color)";

  chillAudio.pause();
  chillAudio.currentTime = 0;
  chillIcon.style.removeProperty("color");
  chillContent.style.removeProperty("color");

  sleepAudio.pause();
  sleepAudio.currentTime = 0;
  sleepIcon.style.removeProperty("color");
  sleepContent.style.removeProperty("color");
};

chillBtn.onclick = function () {
  chillAudio.play();
  chillIcon.style.color = "var(--light-color)";
  chillContent.style.color = "var(--white-color)";

  jazzAudio.pause();
  jazzAudio.currentTime = 0;
  jazzIcon.style.removeProperty("color");
  jazzContent.style.removeProperty("color");

  sleepAudio.pause();
  sleepAudio.currentTime = 0;
  sleepIcon.style.removeProperty("color");
  sleepContent.style.removeProperty("color");
};

sleepBtn.onclick = function () {
  sleepAudio.play();
  sleepIcon.style.color = "var(--light-color)";
  sleepContent.style.color = "var(--white-color)";

  chillAudio.pause();
  chillAudio.currentTime = 0;
  chillIcon.style.removeProperty("color");
  chillContent.style.removeProperty("color");

  jazzAudio.pause();
  jazzAudio.currentTime = 0;
  jazzIcon.style.removeProperty("color");
  jazzContent.style.removeProperty("color");
};

// Pause/Play Button

pauseBtn.onclick = function () {
  if (
    jazzAudio.currentTime == 0 &&
    chillAudio.currentTime == 0 &&
    sleepAudio.currentTime == 0
  ) {
    infoModal.style.display = "block";
  } else {
    if (jazzAudio.paused == false) {
      jazzAudio.pause();
      chillAudio.currentTime = 0;
      sleepAudio.currentTime = 0;
    }
    if (chillAudio.paused == false) {
      chillAudio.pause();
      jazzAudio.currentTime = 0;
      sleepAudio.currentTime = 0;
    }
    if (sleepAudio.paused == false) {
      sleepAudio.pause();
      jazzAudio.currentTime = 0;
      chillAudio.currentTime = 0;
    }
    pauseBtn.style.display = "none";
    playBtn.style.display = "block";
  }
};

playBtn.onclick = function () {
  if (
    jazzAudio.paused == true &&
    chillAudio.currentTime == 0 &&
    sleepAudio.currentTime == 0
  ) {
    jazzAudio.play();
  }
  if (
    chillAudio.paused == true &&
    jazzAudio.currentTime == 0 &&
    sleepAudio.currentTime == 0
  ) {
    chillAudio.play();
  }
  if (
    sleepAudio.paused == true &&
    jazzAudio.currentTime == 0 &&
    chillAudio.currentTime == 0
  ) {
    sleepAudio.play();
  }
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
};
// NOTE + IMAGE
var noteBtn = document.getElementById("note-btn");
var imgBtn = document.getElementById("img-btn");
noteBtn.onclick = function () {
  alert("Chưa có làm má ôi");
};
imgBtn.onclick = function () {
  alert("Y như thằng ở trên");
};
// CLOSE MODAL
closeInfoModal.onclick = function () {
  infoModal.style.display = "none";
};

infoBtn.onclick = function () {
  infoModal.style.display = "block";
};

// CHANGE VOLUME
function changeVolume() {
  var allAudios = document.getElementsByTagName("audio");
  for (i = 0; i < allAudios.length; i++) {
    allAudios[i].volume = slider.value / 100;
  }
}
