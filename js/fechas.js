
let fechaInicial;
let fechaFinal;


agregarFecha = () => {
    auxFechaInicial = document.getElementById("fechaInicial").value;
    auxFechaFinal = document.getElementById("fechaFinal").value;
    guardarLocalStorage();
}

function guardarLocalStorage(){
    localStorage.setItem("fIni",auxFechaInicial);
    localStorage.setItem("fFin",auxFechaFinal);
}