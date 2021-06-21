/*
let (Escopo local)
var (Escopo global)
const (Não pode ser alterada)
*/
let txtNome = document.getElementById('nome')
let txtEmail = document.querySelector('#email')
let txtAssunto = document.querySelector('#assunto')
let nomeOk = false, emailOK = false, assuntoOk = false;
let map = document.querySelector('#mapa')
function validaNome(){
    let txt = document.querySelector('#txtAlerta')
    if(txtNome.value.length < 3) {
        txt.innerHTML = 'Nome inválido'
        txtNome.style.borderBottomColor = "red" 
        txt.style.color = "red"
    } else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
        txtNome.style.borderBottomColor = "green"
        nomeOk = true
    }
}

function validaEmail(){
    let txt = document.querySelector('#txtAlertaEmail')
    if(txtEmail.value.indexOf('@') == -1 || txtEmail.value.indexOf('.') == -1) {
        txt.innerHTML = 'Email inválido'
        txt.style.color = 'red'
        txtEmail.style.borderBottomColor = 'red'
    } else {
        txt.innerHTML = 'Email válido'
        txt.style.color = 'green'
        txtEmail.style.borderBottomColor = 'green'
        emailOK = true
    }
}

function validaAssunto(){
    let txt = document.querySelector('#txtAlertaAssunto')
    if(txtAssunto.value.length >= 100) {
        txt.innerHTML = 'Texto inválido, máximo 100 caracteres'
        txt.style.color = 'red'
        txt.style.display = 'block'
    } else {
        txt.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOK == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso")
    } else {
        alert("Verifique se está correto")
    }
}

function mapaZoom(){
    map.style.width = "800px"
    map.style.height = "600px"
    map.style.transitionDuration="1s"
}

function mapaNormal(){
    map.style.width = "400px"
    map.style.height = "250px"
}