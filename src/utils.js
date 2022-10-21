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
  if (image.style.opacity === "0.13") {
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
    image.style.opacity = "0.13";
    image.style.filter = "blur(3px)";

    let bttn = document.getElementById(button);
    bttn.style.visibility = "visible";

    let tet = document.getElementById(text);
    tet.style.visibility = "visible";
  }
}

export function Hover(background) {
  let image = document.getElementById(background);
  if (image.style.filter === "blur(0px)") {
    image.style.opacity = "1";
    image.style.boxShadow = "0px 0px 25px 5px black inset";
  }
}
export function Hoverout(background) {
  let image = document.getElementById(background);
  if (image.style.filter === "blur(0px)") {
    image.style.opacity = "0.5";
    image.style.boxShadow = "0px 0px 25px 5px black inset";
  }
}
