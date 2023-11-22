const botonContact = document.getElementById("botonContact")
const contacto = document.getElementById("contacto");
const modalCMW = document.getElementById("modalCMW")
const modalJuegaYa = document.getElementById("modalJuegaYa")
const modalCasino = document.getElementById("modalCasino")

const html = document.getElementById("html")
const css = document.getElementById("css")
const javascript = document.getElementById("javascript")
const php = document.getElementById("php")

window.onscroll = function () {
    var scrollY = window.scrollY; // Obtener la posición actual de desplazamiento

    if (scrollY > window.innerHeight * 2.98) {
        botonContact.style.backgroundColor = "black"; // Cambiar el fondo a negro
    } else {
        botonContact.style.backgroundColor = "";
    }

    
    if (scrollY > window.innerHeight * 0.72) {
        html.style.transform = "translateX(0vw)";
        css.style.transform = "translateX(0vw)";
        javascript.style.transform = "translateX(0vw)";
        php.style.transform = "translateX(0vw)";
    } else {
        html.style.transform = "";
        css.style.transform = "";
        javascript.style.transform = "";
        php.style.transform = "";
    }
}

//modal cmw//
function openModalCMW(){
    modalCMW.style.display = "flex"
}
document.getElementById('cmw').addEventListener('click', openModalCMW);


function closeModalCMW(){
    modalCMW.style.display = "none"
}
document.getElementById('closeButton').addEventListener('click', closeModalCMW);
//cierra modal cmw//

//modal juegaYa//
function openModalJuegaYa(){
    modalJuegaYa.style.display = "flex"
}
document.getElementById('aprendeYa').addEventListener('click', openModalJuegaYa);


function closeModalJuegaYa(){
    modalJuegaYa.style.display = "none"
}
document.getElementById('closeButtonJuegaYa').addEventListener('click', closeModalJuegaYa);
//cierra modal JuegaYa//

//modal casino//
function openModalCasino(){
    modalCasino.style.display = "flex"
}
document.getElementById('casino').addEventListener('click', openModalCasino);


function closeModalCasino(){
    modalCasino.style.display = "none"
}
document.getElementById('closeButtonCasino').addEventListener('click', closeModalCasino);
//cierra modal casino//
