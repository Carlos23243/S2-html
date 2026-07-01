function DatosGuardados() {
    alert("Datos guardados correctamente.");

    Mensaje.innerHTML = 
'<div class="alert alert-success">Registro agregado</div>'; 
}

//Formulario

let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let mensaje = document.getElementById("mensaje");

// Validar nombre mientras escribe
nombre.addEventListener("input", function(){

    if(nombre.value.length < 3){
        nombre.classList.add("is-invalid");
        nombre.classList.remove("is-valid");
        document.getElementById("errorNombre").innerHTML =
        "Debe tener al menos 3 letras.";
    }else{
        nombre.classList.add("is-valid");
        nombre.classList.remove("is-invalid");
        document.getElementById("errorNombre").innerHTML = "";
    }

});

// Validar correo mientras escribe
correo.addEventListener("input", function(){

    if(!correo.value.includes("@")){
        correo.classList.add("is-invalid");
        correo.classList.remove("is-valid");
        document.getElementById("errorCorreo").innerHTML =
        "Debe contener @";
    }else{
        correo.classList.add("is-valid");
        correo.classList.remove("is-invalid");
        document.getElementById("errorCorreo").innerHTML = "";
    }

});

// Validar mensaje mientras escribe
mensaje.addEventListener("input", function(){

    if(mensaje.value.length < 10){
        mensaje.classList.add("is-invalid");
        mensaje.classList.remove("is-valid");
        document.getElementById("errorMensaje").innerHTML =
        "Mínimo 10 caracteres.";
    }else{
        mensaje.classList.add("is-valid");
        mensaje.classList.remove("is-invalid");
        document.getElementById("errorMensaje").innerHTML = "";
    }

});