console.log("La calculadora de Santi");

const sound = document.getElementById("sound");
const buttons = Array.from(document.querySelectorAll(".btn"));
const display = document.getElementById("lcd");

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

function keyPress(value) {
  console.log(value);
  if (value === "AC" || value === "C") value = display.innerText = "";
  if (value === "=") {
    let lcd = display.innerText;
    lcd = lcd.replace(/×/g, "*").replace(/÷/g, "/");
    display.innerText = eval(lcd);
    return;
  }
  show = display.innerHTML + value;
  show = show.replace("hola amigo", "");
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
