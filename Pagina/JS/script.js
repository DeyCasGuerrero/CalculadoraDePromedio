const pantalla = document.querySelector(".screen"),
mensaje = document.querySelector(".contenerdor-modelo")
const boton = document.getElementById("enviar"),
limpiar = document.getElementById("Limpiar"),
inputNumero = document.getElementById("numeroReales"),
cerrar=document.getElementById("cerrar")

boton.addEventListener("click", function () {
    console.log("SE DIO CLICK")
    promedio()
})

inputNumero.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        console.log("SE DIO ENTER")
        promedio()
    }
})

cerrar.addEventListener("click", function(){
    mensaje.classList.remove("active")
    console.log("SE DA CLICK")
})
limpiar.addEventListener("click", function () {
    acumulador = 0
    contador = 0
    limpieza()
})

let acumulador = 0
let contador = 0
let prom
function promedio() {

    const numeroRecibido = parseFloat(inputNumero.value)
    if (!isNaN(numeroRecibido)) {
        console.log("ES UN NUMERO XD")
        acumulador = acumulador + numeroRecibido;
        contador += 1
    } else {
        console.log("AAA")
        mensaje.classList.add("active")
    }
    prom = acumulador / contador
    pantalla.textContent = "PROMEDIO: " + prom
}

function limpieza() {
    pantalla.textContent = ""
    inputNumero.value = ""
}

