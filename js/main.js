//VIDEO MUTE///////////////////////////////////////////

var myVideo = document.querySelector("#myVideo");

var muteButton = document.querySelector(".volIco");

var muteButtonOn = document.querySelector(".volIcoOn");

var muteButttonOff = document.querySelector(".soundOff");

muteButton.addEventListener("click", () => {
  console.log("click");

  if (myVideo.muted != true) {
    myVideo.muted = true;
    muteButtonOn.style.opacity = "0";
    muteButttonOff.style.opacity = "1";
  } else {
    myVideo.muted = false;
    muteButtonOn.style.opacity = "1";
    muteButttonOff.style.opacity = "0";
  }
});
