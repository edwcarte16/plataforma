var ingresar = document.getElementById("ingresar");
var inicioSesion = document.getElementById("inicioSesion");

ingresar.addEventListener("click", function(){

    var rol = document.getElementById("rol");
    var selectedRol = rol.options[rol.selectedIndex].text;
    console.log(selectedRol);

    switch(selectedRol){
        case "Seleccione un rol":
            location.href="index.html";
        break;
        case "Usuario":
            location.href="usuario.html";
        break;

        case "Administrador":
            location.href="administrador.html";
        break;
        
        case "Localidades":
            location.href="localidades.html";
        break;
    }
});