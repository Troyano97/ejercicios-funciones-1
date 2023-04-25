
const imagen = document.querySelector("#imagen");
const titulo = document.querySelector("#titulo");
const enlace = document.querySelector("#enlace");
const cuerpoPagina = document.querySelector("body");
const nombreUsuario = document.querySelector("#nombre");

const IMG_1 = "https://images.ecestaticos.com/J51MKchWSGA9o_AmoApwmBWzyes=/0x0:640x360/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fb3a%2F56d%2Fa61%2Fb3a56da612b260e9cfcbdb4f05e84335.jpg";
const IMG_2 = "https://ca-times.brightspotcdn.com/dims4/default/a522a11/2147483647/strip/false/crop/2560x2295+0+0/resize/1486x1332!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F48%2Fc3%2F42a15e363167c3d8fbc5b58b38a0%2Fabe1513877d043ccb46b6700e4ed2d8c";
const IMG_3 = "https://i.blogs.es/d108db/python/840_560.jpg";

const ENLACE_1 = "https://erick-c3.github.io/Trayecto-de-Programador-/html/material-clase.html";
const ENLACE_2 = "https://discord.com";
const ENLACE_3 = "https://es.stackoverflow.com";

let opcionRecibida = prompt("Ingrese una opcion estetica: 1, 2 o 3");
let nombreUsuarioIngresar = prompt("Ingrese su nombre de usuario");

nombreUsuario.innerHTML = nombreUsuarioIngresar

function modificarPagina(colorFondo, colorTexto, colorUsuario, tamanioTexto, tipoFuente, enlaceImg, anchoImg, enlacePagina) {
    cuerpoPagina.style.backgroundColor = colorFondo;
    cuerpoPagina.style.color = colorTexto;
    nombreUsuario.style.color = colorUsuario;
    cuerpoPagina.style.fontSize = tamanioTexto;
    titulo.style.fontFamily = tipoFuente;
    imagen.src = enlaceImg;
    imagen.style.width = anchoImg;
    enlace.href = enlacePagina;

}


if (opcionRecibida == 1) {
    modificarPagina("orange", "black", "red", "15px", "monospace", IMG_1, "200px", ENLACE_1);
} else if (opcionRecibida == 2) {
    modificarPagina("black", "white", "purple", "20px", "cursive", IMG_2, "300px", ENLACE_2);
} else if (opcionRecibida == 3) {
    modificarPagina("pink", "green", "white", "30px", "fantasy", IMG_3, "450px", ENLACE_3);
}