export function OnClickDisplay(background, button, text) {
  let image = document.getElementById(background);
  if (image.style.opacity === "0.1") {
    image.style.opacity = "1";
    image.style.filter = "blur(0px)";

    let bttn = document.getElementById(button);
    bttn.style.visibility = "hidden";

    let tet = document.getElementById(text);
    tet.style.visibility = "hidden";
  } else {
    image.style.opacity = "0.1";
    image.style.filter = "blur(3px)";

    let bttn = document.getElementById(button);
    bttn.style.visibility = "visible";

    let tet = document.getElementById(text);
    tet.style.visibility = "visible";
  }
}

export function Hover(x) {
  let image = document.getElementById(x);
  if (image.style.filter === "blur(0px)") {
    image.style.opacity = "1";
  }
}
export function Hoverout(x) {
  let image = document.getElementById(x);
  if (image.style.filter === "blur(0px)") {
    image.style.opacity = "0.5";
  }
}
