
let auxFechaInicial;


agregarFechaInicial = () => {
    auxFechaInicial = document.getElementById("fechaInicial").value;
    guardarLocalStorageInicial();
}

function guardarLocalStorageInicial(){
    localStorage.setItem("fIni",auxFechaInicial);
}



document.getElementById("fechaInicial").min = new Date().toISOString().split("T")[0];

