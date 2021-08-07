
let auxNombApell;
let correo;
let numeroDePersonas;
let cedula;
let telefono;


agregarReserva = () => {
    auxNombApell = document.getElementById("nombApellLogin").value;
    correo = document.getElementById("correoLogin").value;
    numeroDePersonas = document.getElementById("nPersonas").value;
    cedula = document.getElementById("cedulaLogin").value;
    telefono = document.getElementById("telefonoLogin").value;
    guardarLocalStorage();
}

function guardarLocalStorage(){
    localStorage.setItem("auxNombApell",auxNombApell);
    localStorage.setItem("correo",correo);
    localStorage.setItem("cedula",cedula);
    localStorage.setItem("nPersonas",numeroDePersonas);
    localStorage.setItem("telefono",telefono);
}