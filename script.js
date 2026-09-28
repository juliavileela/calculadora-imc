const peso = document.getElementById("peso")
const altura = document.getElementById("altura")
const botão = document.getElementById("botão")
const resultadoIMC = document.getElementById ("resultado-imc")
const resultadoTexto = document.getElementById("resultado-texto")
const containerResultado = document.getElementById("container-resultado")
 
function calcularIMC() {
    const imc = peso.value / (altura.value * altura.value)
    resultadoIMC.textContent = imc.toFixed(2)
    let texto = ""
    if (imc < 18.5) {
        texto = "Você está abaixo do peso!"
    }
    if (imc >=  18.5 && imc <= 24.9) {
        texto = "Você está no peso ideal!"

    }
    if (imc >= 25 && imc <= 29.9) {
        texto = "Você está sobrepeso!"
    }
    if (imc >= 30){
        texto = "Você está obeso!"
    }
    resultadoTexto.textContent = texto
    containerResultado.classList.remove("hidden")
}


botão.addEventListener("click", calcularIMC)