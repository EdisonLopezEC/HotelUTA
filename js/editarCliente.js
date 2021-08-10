
let cliente = JSON.parse(localStorage.getItem("clienteSelec"));

function mostrarEdito(c){
    return ` <h2 class="fs-title">DATOS DEL CLIENTE</h2>
    <h3 class="fs-subtitle">Complete la informacion</h3>
    <input type="text" id="nombApellEdit" name="nombApellEdi" value="${c._cliente.nombApell}"/>
    <input type="text" id="correoEdit" name="phone" placeholder="Correo" value="${c._cliente.correo}"/>
    <input type="text" id="cedulaEdit" name="phone" placeholder="Cedula" value="${c._cliente.cedula}"/>
    <input type="text" id="telefonoEdit" name="phone" placeholder="Telefono" value="${c._cliente.telefono}"/>
    <div class="wrapper">
        <a class="button" onclick="actualizar()" href="./listado-clientes.html">Siguiente</a>
    </div>`
  }
  
  function imprimirClientes(){
    document.getElementById("llenarDatos").innerHTML = mostrarEdito(cliente);
  }


  imprimirClientes();


  function obtener_reservas(){
      return JSON.parse(localStorage.getItem("reservas"));
  }

  let reservas = obtener_reservas();

  function buscarClienteSeleccionadoEnReservas(a){
    return reservas.findIndex(r => r._cliente.cedula = a._cliente.cedula);
  }

  let index = buscarClienteSeleccionadoEnReservas(cliente);


  function guardarLocalStorage(reservas){
    localStorage.setItem("reservas",JSON.stringify(reservas));
  }

  function actualizar(){
    let reservas = obtener_reservas();
    let nombApell = document.getElementById("nombApellEdit").value;
    let correo = document.getElementById("correoEdit").value;
    let cedula = document.getElementById("cedulaEdit").value;
    let telefono = document.getElementById("telefonoEdit").value;
    reservas[index]._cliente.nombApell=nombApell;
    reservas[index]._cliente.correo = correo;
    reservas[index]._cliente.cedula = cedula;
    reservas[index]._cliente.telefono = telefono;
    guardarLocalStorage(reservas);
  }


