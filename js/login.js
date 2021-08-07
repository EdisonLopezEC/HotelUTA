let nombreUsuario = "Admin";
let contrasena = "Admin1234";

const iniciarSesion = () => {
  let usuarioObtenido = document.getElementById("nombre").value;

  let contrasenaObtenida = document.getElementById("contrasena").value;

  if (usuarioObtenido != nombreUsuario || contrasenaObtenida != contrasena) {
    document.getElementById("error").innerHTML = "Credenciales Incorrectas";
  } else {
    document.getElementById("validar").innerHTML = `<a id="referencia"  href="./listado-reservas.html"  > Login </a>`;
  }
};
