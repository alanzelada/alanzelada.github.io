const botonContact = document.getElementById("botonContact")
const contacto = document.getElementById("contacto");

contacto.addEventListener("mouseup", function(){
    botonContact.style.backgroundColor = "";
    botonContact.style.transition = "0.5s"
    contacto.style.cursor = "pointer"
});

contacto.addEventListener("mousedown", function(){
    // Aquí puedes restablecer el color original del botón
    botonContact.style.backgroundColor = "black"; // Esto eliminará el estilo inline, volviendo al estilo definido en CSS
});

contacto.addEventListener("mouseover", function(){
    botonContact.style.backgroundColor = "black";
    botonContact.style.transition = "0.5s"
    contacto.style.cursor = "pointer"
});

contacto.addEventListener("mouseout", function(){
    // Aquí puedes restablecer el color original del botón
    botonContact.style.backgroundColor = ""; // Esto eliminará el estilo inline, volviendo al estilo definido en CSS
});