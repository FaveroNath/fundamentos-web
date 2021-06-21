
let img1 = document.querySelector("#imgGato")
let img2 = document.querySelector("#imgPato")
let tit1 = document.querySelector("#titulo1")
let tit2 = document.querySelector("#titulo2")


function mostraTitulo(){
    img1.style.opacity = "0.2"
    img1.style.innerHTML = "Gatooooo"
    img1.style.width = "450px"
    img1.style.height = "450px"
    img1.style.transitionDuration="1s"
}

function mostraImgNormal(){
    img1.style.opacity = "1"
    img1.style.width = "350px"
    img1.style.height = "350px"
}

function mostraTitulo1(){
    img2.style.opacity = "0.2"
    img2.style.width = "450px"
    img2.style.height = "450px"
    img2.style.transitionDuration="1s"
}

function mostraImgNormal1(){
    img2.style.opacity = "1"
    img2.style.width = "350px"
    img2.style.height = "350px"
}

