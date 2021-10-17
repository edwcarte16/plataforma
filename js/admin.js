var cajaLocalidades = document.querySelector(".cajaLocalidades");
var cajaOpcionesAdmin = document.querySelector(".cajaOpcionesAdmin");
var menuBurger = document.getElementById("menuBurger");
var burgerIcon = document.getElementById("burgerIcon");
var switchOpciones = document.querySelectorAll(".switchOpciones");
var avatarUsuario = document.getElementById("avatarUsuario");
let estadoAsideLocalidades = 0;
let estadoAsideOpciones = 0;

menuBurger.addEventListener("click", interruptorCajaLocalidades);

function interruptorCajaLocalidades() {
  switch (estadoAsideLocalidades) {
    case 0:
      cajaOpcionesAdmin.style.left = "-370px";
      cajaLocalidades.style.left = "0";
      burgerIcon.classList.remove("fa-graduation-cap");
      burgerIcon.classList.add("fa-times");
      estadoAsideLocalidades = 1;
      estadoAsideOpciones = 0;
      break;

    case 1:
      cajaOpcionesAdmin.style.left = "-370px";
      cajaLocalidades.style.left = "-370px";
      burgerIcon.classList.remove("fa-times");
      burgerIcon.classList.add("fa-graduation-cap");
      estadoAsideLocalidades = 0;
      estadoAsideOpciones = 0;
      break;
  }
}

switchOpciones[0].addEventListener("click", abrir);

function abrir() {
  switch (estadoAsideOpciones) {
    case 0:
      cajaOpcionesAdmin.style.left = "0";
      cajaLocalidades.style.left = "-370px";
      avatarUsuario.classList.remove("fa-cog");
      avatarUsuario.classList.remove("animacion");
      burgerIcon.classList.remove("fa-graduation-cap");
      burgerIcon.classList.add("fa-times");
      avatarUsuario.classList.add("fa-user");
      estadoAsideOpciones = 1;
      estadoAsideLocalidades = 1;
      break;

    case 1:
      cajaOpcionesAdmin.style.left = "-370px";
      cajaLocalidades.style.left = "-370px";
      avatarUsuario.classList.remove("fa-user");
      avatarUsuario.classList.add("fa-cog");
      burgerIcon.classList.remove("fa-times");
      burgerIcon.classList.add("fa-graduation-cap");
      avatarUsuario.classList.add("animacion");
      estadoAsideOpciones = 0;
      estadoAsideLocalidades = 0;
      break;
  }
}
var iframeInformes = document.getElementById("iframeInformes");

function resizeIframe(iframeInformes) {
  iframeInformes.style.height =
    iframeInformes.contentWindow.document.documentElement.scrollHeight + "px";
}

var tituloDinamicInforme = document.getElementById("tituloDinamicInforme");
var btSancionados = document.getElementById("generarInfSancionados");
var btCalific = document.getElementById("generarInfCalCursos");

btSancionados.addEventListener("click", generaInformeSanc);
btCalific.addEventListener("click", generaInformeCal);

function generaInformeCal() {
  tituloDinamicInforme.innerHTML = " Calificaciones de Cursos";
  iframeInformes.setAttribute("src", "informes/calificacion-cursos.html");
  location.href = "administrador.html#seccionInformes";
  interruptorCajaLocalidades();
}

function generaInformeSanc() {
  tituloDinamicInforme.innerHTML = " de Sancionados";
  iframeInformes.setAttribute("src", "informes/sancionados.html");
  location.href = "administrador.html#seccionInformes";
  interruptorCajaLocalidades();
}

var genInfInsc = document.querySelectorAll(".genInfInscritos");
for (const el of genInfInsc) {
  el.addEventListener("click", function () {
    tituloDinamicInforme.innerHTML = " de Inscritos";
    iframeInformes.setAttribute("src", "informes/inscritos.html");
    location.href = "administrador.html#seccionInformes";
    interruptorCajaLocalidades();
  });
}

const tituloDinamicoCurso = document.querySelectorAll(".tituloDinamicoCurso");
const curso1Eng = document.getElementById("curso1Eng");
const curso2Eng = document.getElementById("curso2Eng");
const curso3Eng = document.getElementById("curso3Eng");
const curso1Ken = document.getElementById("curso1Ken");
const curso2Ken = document.getElementById("curso2Ken");
const curso3Ken = document.getElementById("curso3Ken");
const curso1Usa = document.getElementById("curso1Usa");
const curso2Usa = document.getElementById("curso2Usa");
const curso3Usa = document.getElementById("curso3Usa");

curso1Eng.addEventListener("click", function () {
  tituloDinamicoCurso[0].innerHTML = "Diseño Gráfico Opens Source";
  tituloDinamicoCurso[1].innerHTML = "Diseño Gráfico Opens Source";
  tituloDinamicoCurso[0].style.backgroundColor = "#4a89f3a2";
  cajaLocalidades.style.left = "-370px";
  burgerIcon.classList.remove("fa-times");
  burgerIcon.classList.add("fa-graduation-cap");
  estadoAsideLocalidades = 0;
});
curso2Eng.addEventListener("click", function () {
  tituloDinamicoCurso[0].innerHTML = "Desarrollo Web (Front End)";
  tituloDinamicoCurso[1].innerHTML = "Desarrollo Web (Front End)";
  tituloDinamicoCurso[0].style.backgroundColor = "#4a89f3a2";
  cajaLocalidades.style.left = "-370px";
  burgerIcon.classList.remove("fa-times");
  burgerIcon.classList.add("fa-graduation-cap");
  estadoAsideLocalidades = 0;
});
curso3Eng.addEventListener("click", function () {
  tituloDinamicoCurso[0].innerHTML = "Desarrollo Web (Back End)";
  tituloDinamicoCurso[1].innerHTML = "Desarrollo Web (Back End)";
  tituloDinamicoCurso[0].style.backgroundColor = "#4a89f3a2";
  cajaLocalidades.style.left = "-370px";
  burgerIcon.classList.remove("fa-times");
  burgerIcon.classList.add("fa-graduation-cap");
  estadoAsideLocalidades = 0;
});
curso1Ken.addEventListener("click", function () {
  tituloDinamicoCurso[0].innerHTML = "Estrategias de Mercadeo";
  tituloDinamicoCurso[1].innerHTML = "Estrategias de Mercadeo";
  tituloDinamicoCurso[0].style.backgroundColor = "#FF7E4CA5";
  cajaLocalidades.style.left = "-370px";
  burgerIcon.classList.remove("fa-times");
  burgerIcon.classList.add("fa-graduation-cap");
  estadoAsideLocalidades = 0;
});
curso2Ken.addEventListener("click", function () {
  tituloDinamicoCurso[0].innerHTML = "Manejo Avanzado de Excel (Macros)";
  tituloDinamicoCurso[1].innerHTML = "Manejo Avanzado de Excel (Macros)";
  tituloDinamicoCurso[0].style.backgroundColor = "#FF7E4CA5";
  cajaLocalidades.style.left = "-370px";
  burgerIcon.classList.remove("fa-times");
  burgerIcon.classList.add("fa-graduation-cap");
  estadoAsideLocalidades = 0;
});
curso3Ken.addEventListener("click", function () {
  tituloDinamicoCurso[0].innerHTML = "Marketing Digital y Redes Sociales";
  tituloDinamicoCurso[1].innerHTML = "Marketing Digital y Redes Sociales";
  tituloDinamicoCurso[0].style.backgroundColor = "#FF7E4CA5";
  cajaLocalidades.style.left = "-370px";
  burgerIcon.classList.remove("fa-times");
  burgerIcon.classList.add("fa-graduation-cap");
  estadoAsideLocalidades = 0;
});
curso1Usa.addEventListener("click", function () {
  tituloDinamicoCurso[0].innerHTML = "Carpintería y Tapicería";
  tituloDinamicoCurso[1].innerHTML = "Carpintería y Tapicería";
  tituloDinamicoCurso[0].style.backgroundColor = "#ff124488";
  cajaLocalidades.style.left = "-370px";
  burgerIcon.classList.remove("fa-times");
  burgerIcon.classList.add("fa-graduation-cap");
  estadoAsideLocalidades = 0;
});
curso2Usa.addEventListener("click", function () {
  tituloDinamicoCurso[0].innerHTML = "Ornamentación y Soldadura";
  tituloDinamicoCurso[1].innerHTML = "Ornamentación y Soldadura";
  tituloDinamicoCurso[0].style.backgroundColor = "#ff124488";
  cajaLocalidades.style.left = "-370px";
  burgerIcon.classList.remove("fa-times");
  burgerIcon.classList.add("fa-graduation-cap");
  estadoAsideLocalidades = 0;
});
curso3Usa.addEventListener("click", function () {
  tituloDinamicoCurso[0].innerHTML = "Modistería y Confección de Ropa Deportiva";
  tituloDinamicoCurso[1].innerHTML = "Modistería y Confección de Ropa Deportiva";
  tituloDinamicoCurso[0].style.backgroundColor = "#ff124488";
  cajaLocalidades.style.left = "-370px";
  burgerIcon.classList.remove("fa-times");
  burgerIcon.classList.add("fa-graduation-cap");
  estadoAsideLocalidades = 0;
});
