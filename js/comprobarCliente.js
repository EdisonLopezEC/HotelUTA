
let cliente = JSON.parse(localStorage.getItem("clienteSelec"));

function mostrarEdito(c){
    return ` <h2 class="fs-title">DATOS DEL CLIENTE</h2>
    <h3 class="fs-subtitle">Complete la informacion</h3>
    <input type="text" id="nombApellEdit" name="nombApellEdi" value="${c._cliente.nombApell}"/>
    <input type="text" id="correoEdit" name="phone" placeholder="Correo" value="${c._cliente.correo}"/>
    <input type="text" id="cedulaEdit" name="phone" placeholder="Cedula" value="${c._cliente.cedula}"/>
    <input type="text" id="telefonoEdit" name="phone" placeholder="Telefono" value="${c._cliente.telefono}"/>
    <div class="wrapper">
        <a class="button" href="./listado-clientes.html">Siguiente</a>
    </div>`
  }
  
  
  function imprimirClientes(){
    document.getElementById("llenarDatos").innerHTML = mostrarEdito();
  }
  
  