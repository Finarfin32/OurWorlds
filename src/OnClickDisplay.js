function OnClickDisplay(x, y, z) {
  let image = document.getElementById(x);

  if (image.style.opacity == "0.1") {
    image.style.opacity = "1";
    image.style.filter = "blur(0px)";

    let button = document.getElementById(y);
    button.style.visibility = "hidden";

    let text = document.getElementById(z);
    text.style.visibility = "hidden";
  } else {
    image.style.opacity = "0.1";
    image.style.filter = "blur(3px)";

    let button = document.getElementById(y);
    button.style.visibility = "visible";

    let text = document.getElementById(z);
    text.style.visibility = "visible";
  }
}

function Hover(x) {
  let image = document.getElementById(x);
  if (image.style.filter == "blur(0px)") {
    image.style.opacity = "1";
  }
}
function Hoverout(x) {
  let image = document.getElementById(x);
  if (image.style.filter == "blur(0px)") {
    image.style.opacity = "0.5";
  }
}

export default { OnClickDisplay, Hoverout, Hover };
