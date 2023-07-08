let playPauseBtn = document.querySelector(".play-pause");

let backwardBtn = document.querySelector(".backward");

let forwardBtn = document.querySelector(".forward");

let audioInput = document.querySelector(".handle-music");

let url;

let audio;

audioInput.onchange = function () {
  console.log(this.files[0]);
  file = audioInput.files[0];
  url = URL.createObjectURL(file);
  audio = new Audio(url);
  audio.onended = () => {
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  };
};

playPauseBtn.addEventListener("click", function () {
  console.log(audio);

  if (audio) {
    if (this.innerHTML === '<i class="fa-solid fa-pause"></i>') {
      this.innerHTML = '<i class="fa-solid fa-play"></i>';
      audio.pause();
    } else {
      this.innerHTML = '<i class="fa-solid fa-pause"></i>';
      audio.play();
    }
  }
  
  else{
    console.log("No Audio Seclected")
  }
});

forwardBtn.addEventListener("click", function () {
  if (audio) {
    audio.currentTime += 5;
  }
  
  else{
    console.log("No Audio Seclected")
  }
});

backwardBtn.addEventListener("click", function () {
  if (audio) {
    audio.currentTime -= 5;
  }
  
  else{
    console.log("No Audio Seclected")
  }
});
