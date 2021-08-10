let auxFechaFinal;

agregarFechaFinal = () => {
    auxFechaFinal = document.getElementById("fechaFinal").value;
    guardarLocalStorageFinal();
}


function guardarLocalStorageFinal(){
    localStorage.setItem("fFin",auxFechaFinal);
}



let fechaI =(localStorage.getItem("fIni"));


document.getElementById("fechaFinal").min = fechaI;