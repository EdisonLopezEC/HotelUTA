let r = new RegistroHotel();

crearReserva = () => {

    let habitacion = JSON.parse(localStorage.getItem("seleccionada"));
    let nombApell = localStorage.getItem("auxNombApell");
    let cedula = localStorage.getItem("cedula");
    let correo = localStorage.getItem("correo");
    let telefono = localStorage.getItem("telefono");

    let cliente = new Huesped(nombApell, cedula, correo, telefono);
    let fechaInicial= localStorage.getItem("fIni");
    let fechaFinal= localStorage.getItem("fFin");
    let perAlojadas = localStorage.getItem("nPersonas");

    let nuevo = new Reserva(cliente, fechaInicial, fechaFinal, perAlojadas, habitacion);
    console.log("Crear reserva")
    r.crearReserva(nuevo);
}