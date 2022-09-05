var brahamapilsen = document.getElementById("caixa-brahama-pilsen")
var ResultadoBrahamaPilsen = document.getElementById("resultado-brahama-pilsen")
var LucroTotalBrahamaPilsen = document.getElementById("lucro-total-brahama-pilsen")

function calculobrahamapilsen() {
    var multiplicarbrahamapilsen = Number(brahamapilsen.value) * 12
    ResultadoBrahamaPilsen.innerHTML = multiplicarbrahamapilsen
    ResultadoBrahamaPilsen.style.color = "black"
    var pagar = Number(brahamapilsen.value) * 30
    var dividircaixaBrahamaPilsen = (Number(brahamapilsen.value) * 60) - pagar
    LucroTotalBrahamaPilsen.innerHTML = dividircaixaBrahamaPilsen.toFixed(2)
    LucroTotalBrahamaPilsen.style.color = "black"
}


var brahamapilsen = document.getElementById("caixa-brahama-pilsen")
var ResultadoBrahamaPilsen = document.getElementById("resultado-brahama-pilsen")
var ResultadoTotalBrahamaPilsen = document.getElementById("resultado-total-brahama-pilsen")

function lucroBrahamaPilsen() {
    var multiplicarbrahamapilsen = Number(brahamapilsen.value) * 12
    ResultadoBrahamaPilsen.innerHTML = multiplicarbrahamapilsen
    ResultadoBrahamaPilsen.style.color = "black"
    var dividircaixaBrahamaPilsen = Number(brahamapilsen.value) * 60 
    ResultadoTotalBrahamaPilsen.innerHTML = dividircaixaBrahamaPilsen.toFixed(2)
    ResultadoTotalBrahamaPilsen.style.color = "black"
}




var skol = document.getElementById("caixa-skol")
var ResultadoSkol = document.getElementById("resultado-skol")
var LucroTotalSkol = document.getElementById("lucro-total-skol")

function calculoskol() {
    var multiplicarskol = Number(skol.value) * 12
    ResultadoSkol.innerHTML = multiplicarskol 
    ResultadoSkol.style.color = "black"
    var pagar = Number(skol.value) * 28.80
    var dividircaixaSkol = (Number(skol.value) * 60) - pagar
    LucroTotalSkol.innerHTML = dividircaixaSkol
    LucroTotalSkol.style.color = "black"
}

var skol = document.getElementById("caixa-skol")
var ResultadoSkol = document.getElementById("resultado-skol")
var ResultadoTotalSkol = document.getElementById("resultado-total-skol")

function lucroSkol() {
    var multiplicarskol = Number(skol.value) * 12
    ResultadoSkol.innerHTML = multiplicarskol 
    ResultadoSkol.style.color = "black"
    var dividircaixaSkol = Number(skol.value) * 60
    ResultadoTotalSkol.innerHTML = dividircaixaSkol
    ResultadoTotalSkol.style.color = "black"
}


var itaipava = document.getElementById("caixa-itaipava")
var ResultadoItaipava = document.getElementById("resultado-itaipava")
var LucroTotalItaipava = document.getElementById("lucro-total-itaipava")

function calculoitaipava() {
    var multiplicaritaipava = Number(itaipava.value) * 12
    ResultadoItaipava.innerHTML = multiplicaritaipava
    ResultadoItaipava.style.color = "black"
    var pagar = Number(itaipava.value) * 28.68
    var dividircaixaItaipava = (Number(itaipava.value) * 48) - pagar
    LucroTotalItaipava.innerHTML = dividircaixaItaipava
    LucroTotalItaipava.style.color = "black"
}


var itaipava = document.getElementById("caixa-itaipava")
var ResultadoItaipava = document.getElementById("resultado-itaipava")
var ResultadoTotalItaipava = document.getElementById("resultado-total-itaipava")

function lucroItaipava() {
    var multiplicaritaipava = Number(itaipava.value) * 12
    ResultadoItaipava.innerHTML = multiplicaritaipava
    ResultadoItaipava.style.color = "black"
    var dividircaixaItaipava = Number(itaipava.value) * 48
    ResultadoTotalItaipava.innerHTML = dividircaixaItaipava
    ResultadoTotalItaipava.style.color = "black"
}


var brahamaduplo = document.getElementById("caixa-brahama-duplo")
var ResultadoBrahamaDuplo = document.getElementById("resultado-brahama-duplo")
var LucroTotalBrahamaDuplo = document.getElementById("lucro-total-brahama-duplo")

function calculobrahamaduplo() {
    var multiplicarbrahamaduplo = Number(brahamaduplo.value) * 12
    ResultadoBrahamaDuplo.innerHTML = multiplicarbrahamaduplo
    ResultadoBrahamaDuplo.style.color = "black"
    var pagar = Number(brahamaduplo.value) * 33.48
    var dividircaixaBrahamaDuplo = (Number(brahamaduplo.value) * 60) - pagar
    LucroTotalBrahamaDuplo.innerHTML = dividircaixaBrahamaDuplo.toFixed(2)
    LucroTotalBrahamaDuplo.style.color = "black"
}


var brahamaduplo = document.getElementById("caixa-brahama-duplo")
var ResultadoBrahamaDuplo = document.getElementById("resultado-brahama-duplo")
var ResultadoTotalBrahamaDuplo = document.getElementById("resultado-total-brahama-duplo")

function lucroBrahamaDuplo() {
    var multiplicarbrahamaduplo = Number(brahamaduplo.value) * 12
    ResultadoBrahamaDuplo.innerHTML = multiplicarbrahamaduplo
    ResultadoBrahamaDuplo.style.color = "black"
    var dividircaixaBrahamaDuplo = Number(brahamaduplo.value) * 60
    ResultadoTotalBrahamaDuplo.innerHTML = dividircaixaBrahamaDuplo.toFixed(2)
    ResultadoTotalBrahamaDuplo.style.color = "black"
}



var petra = document.getElementById("caixa-petra")
var ResultadoPetra = document.getElementById("resultado-petra")
var LucroTotalPetra = document.getElementById("lucro-total-petra")

function calculopetra() {
    var multiplicarpetra = Number(petra.value) * 12
    ResultadoPetra.innerHTML = multiplicarpetra
    ResultadoPetra.style.color = "black"
    var pagar = Number(petra.value) * 31.08
    var dividircaixaPetra = (Number(petra.value) * 60) - pagar
    LucroTotalPetra.innerHTML = dividircaixaPetra
    LucroTotalPetra.style.color = "black"
}


var petra = document.getElementById("caixa-petra")
var ResultadoPetra = document.getElementById("resultado-petra")
var ResultadoTotalPetra = document.getElementById("resultado-total-petra")

function lucroPetra() {
    var multiplicarpetra = Number(petra.value) * 12
    ResultadoPetra.innerHTML = multiplicarpetra
    ResultadoPetra.style.color = "black"
    var dividircaixaPetra = Number(petra.value) * 60
    ResultadoTotalPetra.innerHTML = dividircaixaPetra
    ResultadoTotalPetra.style.color = "black"
}


var devassa = document.getElementById("caixa-devassa")
var ResultadoDevassa = document.getElementById("resultado-devassa")
var LucroTotalDevassa = document.getElementById("lucro-total-devassa")

function calculodevassa() {
    var multiplicardevassa = Number(devassa.value) * 12
    ResultadoDevassa.innerHTML = multiplicardevassa
    ResultadoDevassa.style.color = "black"
    var pagar = Number(devassa.value) * 31.08
    var dividircaixaDevassa = (Number(devassa.value) * 60) - pagar
    LucroTotalDevassa.innerHTML = dividircaixaDevassa
    LucroTotalDevassa.style.color = "black"
}


var devassa = document.getElementById("caixa-devassa")
var ResultadoDevassa = document.getElementById("resultado-devassa")
var ResultadoTotalDevassa = document.getElementById("resultado-total-devassa")

function lucroDevassa() {
    var multiplicardevassa = Number(devassa.value) * 12
    ResultadoDevassa.innerHTML = multiplicardevassa
    ResultadoDevassa.style.color = "black"
    var dividircaixaDevassa = Number(devassa.value) * 60
    ResultadoTotalDevassa.innerHTML = dividircaixaDevassa
    ResultadoTotalDevassa.style.color = "black"
}


var refrigerante = document.getElementById("caixa-refrigerante")
var ResultadoRefrigerante = document.getElementById("resultado-refrigerante")
var LucroTotalRefrigerante = document.getElementById("lucro-total-refrigerante")

function calculorefrigerante() {
    var multiplicarrefrigerante = Number(refrigerante.value) * 12
    ResultadoRefrigerante.innerHTML = multiplicarrefrigerante
    ResultadoRefrigerante.style.color = "black"
    var pagar = Number(refrigerante.value) * 28.68
    var dividircaixaRefrigerante = (Number(refrigerante.value) * 48) - pagar
    LucroTotalRefrigerante.innerHTML = dividircaixaRefrigerante
    LucroTotalRefrigerante.style.color = "black"
}



var refrigerante = document.getElementById("caixa-refrigerante")
var ResultadoRefrigerante = document.getElementById("resultado-refrigerante")
var ResultadoTotalRefrigerante = document.getElementById("resultado-total-refrigerante")

function lucroRefrigerante() {
    var multiplicarrefrigerante = Number(refrigerante.value) * 12
    ResultadoRefrigerante.innerHTML = multiplicarrefrigerante
    ResultadoRefrigerante.style.color = "black"
    var dividircaixaRefrigerante = Number(refrigerante.value) * 48
    ResultadoTotalRefrigerante.innerHTML = dividircaixaRefrigerante
    ResultadoTotalRefrigerante.style.color = "black"
}


