export function PlaySound(soundobj) {
  let thisSound = document.getElementById(soundobj);
  thisSound.play();
}

export function StopSound(soundobj) {
  let thisSound = document.getElementById(soundobj);
  thisSound.pause();
  thisSound.currentTime = 0;
}

export function OnClickDisplay(background, button, text, sound) {
  let image = document.getElementById(background);
  if (image.style.opacity === "0.1") {
    StopSound(sound);
    image.style.opacity = "1";
    image.style.filter = "blur(0px)";

    let bttn = document.getElementById(button);
    bttn.style.visibility = "hidden";

    let tet = document.getElementById(text);
    tet.style.visibility = "hidden";
  } else {
    if (sound === "chroniclesSound") StopSound("romeSound");
    else StopSound("chroniclesSound");
    PlaySound(sound);
    image.style.opacity = "0.1";
    image.style.filter = "blur(3px)";

    let bttn = document.getElementById(button);
    bttn.style.visibility = "visible";

    let tet = document.getElementById(text);
    tet.style.visibility = "visible";
  }
}

export function Hover(x) {
  console.log("test1");
  let image = document.getElementById(x);
  if (image.style.filter === "blur(0px)") {
    image.style.opacity = "1";
    console.log("test1.1");
    image.style.boxShadow = "0px 0px 25px 5px black inset";
  }
}
export function Hoverout(x) {
  console.log("test2");
  let image = document.getElementById(x);
  if (image.style.filter === "blur(0px)") {
    console.log("test2.2");
    image.style.opacity = "0.5";
    image.style.boxShadow = "0px 0px 25px 5px black inset";
  }
}

export function setVolumeOff(sound) {
  const thisSound = document.getElementById(sound);
  thisSound.volume = 0;
}

export function setFullVolume(sound) {
  const thisSound = document.getElementById(sound);
  thisSound.volume = 1.0;
}
