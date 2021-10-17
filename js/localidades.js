var cajaOpcionesAdmin = document.querySelector(".cajaOpcionesAdmin");
var switchOpciones = document.querySelector(".switchOpciones");
var avatarUsuario = document.getElementById("avatarUsuario");
let estadoAsideOpciones = 0;

switchOpciones.addEventListener("click", abrir);

function abrir(){

    switch(estadoAsideOpciones){
        case 0:
            cajaOpcionesAdmin.style.left = "0";
            avatarUsuario.classList.remove("fa-cog");
            avatarUsuario.classList.remove("animacion");
            avatarUsuario.classList.add("fa-times");
            estadoAsideOpciones = 1;
        break;

        case 1:
            cajaOpcionesAdmin.style.left = "-370px";
            avatarUsuario.classList.remove("fa-times");
            avatarUsuario.classList.add("fa-cog");;
            avatarUsuario.classList.add("animacion");
            estadoAsideOpciones = 0;
        break;
    }
}
var iframeInformes = document.getElementById("iframeInformes");

function resizeIframe(iframeInformes) {
    iframeInformes.style.height = iframeInformes.contentWindow.document.documentElement.scrollHeight + 'px';
}

var tituloDinamicInforme = document.getElementById("tituloDinamicInforme");
var btSancionados = document.getElementById("generarInfSancionados");
var btCalific = document.getElementById("generarInfCalCursos");

btSancionados.addEventListener("click", generaInformeSanc);
btCalific.addEventListener("click", generaInformeCal);

function generaInformeCal(){
    tituloDinamicInforme.innerHTML = " Calificaciones de Cursos";
    iframeInformes.setAttribute('src', 'informes/calificacion-cursos.html');
    interruptorCajaLocalidades();
}

function generaInformeSanc(){
    tituloDinamicInforme.innerHTML = " de Sancionados";
    iframeInformes.setAttribute('src', 'informes/sancionados.html');
    interruptorCajaLocalidades();
}