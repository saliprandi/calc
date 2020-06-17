console.log("La calculadora de Santi");

const sound = document.getElementById("sound");
const buttons = Array.from(document.querySelectorAll(".btn"));
const display = document.getElementById("lcd");

// detecta cuando se apreta un botón
buttons.forEach((btn) => {
  btn.addEventListener(
    "mouseup",
    (e) => {
      keyPress(e.target.innerText);
      e.preventDefault();
    },
    false
  );
  btn.addEventListener(
    "touchend",
    (e) => {
      keyPress(e.target.innerText);
      e.preventDefault();
    },
    false
  );
});

// realiza una acción cuando se apreta un botón
function keyPress(value) {
  console.log(value);
  if (value === "▸") {
    display.innerText = display.innerText.slice(0, -1);
    return;
  }
  if (value === "±") {
    let lcd = display.innerText;
    if (lcd.slice(0, 1) === "-") lcd = lcd.slice(1);
    else lcd = "-" + lcd;
    display.innerText = lcd;
    return;
  }

  if (value === "·") value = ".";
  if (value === "AC" || value === "C") value = display.innerText = "";
  if (value === "=") {
    let lcd = display.innerText;
    lcd = lcd.replace(/×/g, "*").replace(/÷/g, "/");
    display.innerText = eval(lcd);
    return;
  }
  show = display.innerHTML + value;
  show = show.replace("¡hola!", "");
  display.innerText = show;
  display.scrollLeft = 1000000;
}

// Detectar teclas
document.onkeydown = function (e) {
  e = e || window.event;
  let value = e.key;
  if (value === "Enter") keyPress("=");
  if (value === "*") keyPress("×");
  if (value === "/") keyPress("÷");
  if (value < 10 || value === "+" || value === "-") keyPress(value);
};
