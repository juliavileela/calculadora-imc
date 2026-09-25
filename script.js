const peso = document.getElementById("peso")
const altura = document.getElementById("altura")
const botão = document.getElementById("botão")
 
function calcularIMC(){
    console.log(peso.value,altura.value)
}
botão.addEventListener("click", calcularIMC)