console.log("La calculadora de Santi");

const sound = document.getElementById("sound");
const buttons = Array.from(document.querySelectorAll(".btn"));
const display = document.getElementById("lcd");

buttons.forEach((btn) =>
  btn.addEventListener("touchstart", (e) => keyPress(e.target.innerText))
);

function keyPress(value) {
  //   if (value === "×") value = "*";
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
  console.log(e.key);
  let value = e.key;
  if (value === "Enter") keyPress("=");
  if (value === "*") keyPress("×");
  if (value === "/") keyPress("÷");
  if (value < 10 || value === "+" || value === "-") keyPress(value);
};
