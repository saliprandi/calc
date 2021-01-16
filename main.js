console.log("La calculadora de Santi")

const buttons = Array.from(document.querySelectorAll(".btn"))
const display = document.getElementById("lcd")
const formatter = new Intl.NumberFormat("en") // Formater number

// detecta cuando se apreta un botón
buttons.forEach((btn) => {
  btn.addEventListener(
    "mouseup",
    (e) => {
      keyPress(e.target.innerText)
      e.preventDefault()
    },
    false
  )
  btn.addEventListener(
    "touchend",
    (e) => {
      keyPress(e.target.innerText)
      e.preventDefault()
    },
    false
  )
})

// realiza una acción cuando se apreta un botón
function keyPress(value) {
  if (value === "▸") {
    display.innerText = display.innerText.slice(0, -1)
    return
  }
  if (value === "±") {
    let lcd = display.innerText
    if (lcd.slice(0, 1) === "-") lcd = lcd.slice(1)
    else lcd = "-" + lcd
    display.innerText = lcd
    return
  }

  if (value === "·") value = "."
  if (value === "AC" || value === "C") value = display.innerText = ""
  if (value === "=") {
    let lcd = display.innerText
    // Reemplazo símbolo de divición
    lcd = lcd.replace(/×/g, "*").replace(/÷/g, "/")
    // Reemplazo raíz cuadrada
    if (lcd.indexOf("√") > -1) {
      lcd = lcd.replace("√", "Math.sqrt(") + ")"
    }

    // Evalua la operación
    lcd = eval(lcd)
    lcd = formatter.format(lcd)

    display.innerText = lcd
    return
  }
  show = display.innerHTML + value
  // show = show.replace("¡hola!", "");
  display.innerText = show
  display.scrollLeft = 1000000
}

// Detectar teclas
document.onkeydown = function (e) {
  e = e || window.event
  let value = e.key
  if (value === "Enter") keyPress("=")
  if (value === "*") keyPress("×")
  if (value === "/") keyPress("÷")
  if (value < 10 || value === "+" || value === "-") keyPress(value)
}
