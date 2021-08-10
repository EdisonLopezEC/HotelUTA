
let r = new RegistroHotel();

let nombApell;
let cargo;
let cedula;
let sueldo;


agregarPersonal = () => {
    nombApell = document.getElementById("nombApellPersonal").value;
    cedula = document.getElementById("cedulaPersonal").value;
    cargo = document.getElementById("cargoPersonal").value;
    sueldo = document.getElementById("salarioPersonal").value;
    let l = new Personal(nombApell, cedula, cargo, sueldo);
    r.crearPersonal(l);
}
