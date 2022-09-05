var agua = document.getElementById("caixa-agua")
var ResultadoAgua = document.getElementById("resultado-agua") 
var ResultadoTotalAgua = document.getElementById("resultado-total-agua")

function calculoagua(){ 
    var multiplicaragua = Number(agua.value) * 12
    ResultadoAgua.innerHTML = multiplicaragua
    ResultadoAgua.style.color = "black"
    var dividircaixaAgua = Number(agua.value) * 29
    ResultadoTotalAgua.innerHTML = dividircaixaAgua
    ResultadoTotalAgua.style.color = "black"
}


var agua = document.getElementById("caixa-agua")
var ResultadoAgua = document.getElementById("resultado-agua") 
var LucroTotalAgua = document.getElementById("lucro-total-agua")

function lucroAgua(){ 
    var multiplicaragua = Number(agua.value) * 12
    ResultadoAgua.innerHTML = multiplicaragua
    ResultadoAgua.style.color = "black"
    var pagar = Number(agua.value) * 9 
    var dividircaixaAgua = (Number(agua.value) * 29) - pagar
    LucroTotalAgua.innerHTML = dividircaixaAgua
    LucroTotalAgua.style.color = "black"
}



var aguagas = document.getElementById("caixa-agua-gas")
var ResultadoAguaGas = document.getElementById("resultado-agua-gas") 
var ResultadoTotalAguaGas = document.getElementById("resultado-total-agua-gas")

function calculoaguagas(){ 
    var multiplicaraguagas = Number(aguagas.value) * 12
    ResultadoAguaGas.innerHTML = multiplicaraguagas
    ResultadoAguaGas.style.color = "black"
    var dividircaixaAguaGas = Number(aguagas.value) * 36
    ResultadoTotalAguaGas.innerHTML = dividircaixaAguaGas
    ResultadoTotalAguaGas.style.color = "black"
}


var aguagas = document.getElementById("caixa-agua-gas")
var ResultadoAguaGas = document.getElementById("resultado-agua-gas") 
var LucroTotalAguaGas = document.getElementById("lucro-total-agua-gas")

function lucroAguaGas(){ 
    var multiplicaraguagas = Number(aguagas.value) * 12
    ResultadoAguaGas.innerHTML = multiplicaraguagas
    ResultadoAguaGas.style.color = "black"
    var pagar = Number(aguagas.value) * 13.2 
    var dividircaixaAguaGas = (Number(aguagas.value) * 36) - pagar
    LucroTotalAguaGas.innerHTML = dividircaixaAguaGas
    LucroTotalAguaGas.style.color = "black"
}


var heineken = document.getElementById("caixa-heineken")
var ResultadoHeineken = document.getElementById("resultado-heineken")
var ResultadoTotalHeineken = document.getElementById("resultado-total-heineken")

function calculoheineken() {
    var multiplicarheineken = Number(heineken.value) * 24
    ResultadoHeineken.innerHTML = multiplicarheineken
    ResultadoHeineken.style.color = "black"
    var dividircaixaHeineken = Number(heineken.value) * 240
    ResultadoTotalHeineken.innerHTML = dividircaixaHeineken
    ResultadoTotalHeineken.style.color = "black"

}


var heineken = document.getElementById("caixa-heineken")
var ResultadoHeineken = document.getElementById("resultado-heineken")
var LucroTotalHeineken = document.getElementById("lucro-total-heineken")

function lucroHeineken() {
    var multiplicarheineken = Number(heineken.value) * 24
    ResultadoHeineken.innerHTML = multiplicarheineken
    ResultadoHeineken.style.color = "black"
    var pagar = Number(heineken.value) * 144 
    var dividircaixaHeineken = (Number(heineken.value) * 240) - pagar
    LucroTotalHeineken.innerHTML = dividircaixaHeineken
    LucroTotalHeineken.style.color = "black"

}


var corona = document.getElementById("caixa-corona")
var ResultadoCorona = document.getElementById("resultado-corona")
var ResultadoTotalCorona = document.getElementById("resultado-total-corona")

function calculocorona() {
    var multiplicarcorona = Number(corona.value) * 6
    ResultadoCorona.innerHTML = multiplicarcorona
    ResultadoCorona.style.color = "black"
    var dividircaixaCorona = Number(corona.value) * 60
    ResultadoTotalCorona.innerHTML = dividircaixaCorona
    ResultadoTotalCorona.style.color = "black"

}


var corona = document.getElementById("caixa-corona")
var ResultadoCorona = document.getElementById("resultado-corona")
var LucroTotalCorona = document.getElementById("lucro-total-corona")

function lucroCorona() {
    var multiplicarcorona = Number(corona.value) * 6
    ResultadoCorona.innerHTML = multiplicarcorona
    ResultadoCorona.style.color = "black"
    var pagar = Number(corona.value) * 36
    var dividircaixaCorona = (Number(corona.value) * 60) - pagar
    LucroTotalCorona.innerHTML = dividircaixaCorona
    LucroTotalCorona.style.color = "black"

}


var boduais = document.getElementById("caixa-boduais")
var ResultadoBoduais = document.getElementById("resultado-boduais")
var ResultadoTotalBoduais = document.getElementById("resultado-total-boduais")

function calculoboduais() {
    var multiplicarboduais = Number(boduais.value) * 6
    ResultadoBoduais.innerHTML = multiplicarboduais
    ResultadoBoduais.style.color = "black"
    var dividircaixaBoduais = Number(boduais.value) * 60
    ResultadoTotalBoduais.innerHTML = dividircaixaBoduais
    ResultadoTotalBoduais.style.color = "black"

}



var boduais = document.getElementById("caixa-boduais")
var ResultadoBoduais = document.getElementById("resultado-boduais")
var LucroTotalBoduais = document.getElementById("lucro-total-boduais")

function lucroBoduais() {
    var multiplicarboduais = Number(boduais.value) * 6
    ResultadoBoduais.innerHTML = multiplicarboduais
    ResultadoBoduais.style.color = "black"
    var pagar = Number(boduais.value) * 27
    var dividircaixaBoduais = (Number(boduais.value) * 60) - pagar
    LucroTotalBoduais.innerHTML = dividircaixaBoduais
    LucroTotalBoduais.style.color = "black"

}


var stella = document.getElementById("caixa-stella")
var ResultadoStella = document.getElementById("resultado-stella")
var ResultadoTotalStella = document.getElementById("resultado-total-stella")

function calculostella() {
    var multiplicarstella = Number(stella.value) * 4
    ResultadoStella.innerHTML = multiplicarstella
    ResultadoStella.style.color = "black"
    var dividircaixaStella = Number(stella.value) * 40
    ResultadoTotalStella.innerHTML = dividircaixaStella
    ResultadoTotalStella.style.color = "black"

}



var stella = document.getElementById("caixa-stella")
var ResultadoStella = document.getElementById("resultado-stella")
var LucroTotalStella = document.getElementById("lucro-total-stella")

function lucroStella() {
    var multiplicarstella = Number(stella.value) * 4
    ResultadoStella.innerHTML = multiplicarstella
    ResultadoStella.style.color = "black"
    var pagar = Number(stella.value) * 24
    var dividircaixaStella = (Number(stella.value) * 40) - pagar
    LucroTotalStella.innerHTML = dividircaixaStella
    LucroTotalStella.style.color = "black"

}