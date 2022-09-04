//Slider
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const cerrar = document.querySelector('.cerrar');

menu.addEventListener("click", () => {
    nav.classList.add("nav--show");
    menu.classList.add("invisible");
    cerrar.classList.remove("invisible");
});

cerrar.addEventListener("click", () =>{
    nav.classList.remove("nav--show");
    menu.classList.remove("invisible");
    cerrar.classList.add("invisible");
});

//Acla nav
const contacto = document.querySelector('.li__contacto--movile');

contacto.addEventListener("click", () => {
    nav.classList.remove("nav--show");
    menu.classList.remove("invisible");
    cerrar.classList.add("invisible");
});



