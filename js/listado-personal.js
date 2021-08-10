

let mosntrarPersonal = (d) => {
    return `<tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
          <img
            class="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
            alt=""
          />
        </div>
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">
            ${d._nombre}
          </div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-900">${d._cedula}</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <span
        class="
          px-2
          inline-flex
          text-xs
          leading-5
          font-semibold
          rounded-full
          bg-green-100
          text-green-800
        "
      >
        ${d._cargo}
      </span>
    </td>
    <td
      class="
        px-6
        py-4
        whitespace-nowrap
        text-sm text-gray-500
      "
    >
      ${d._salario}
    </td>

    <td
      class="
        px-6
        py-4
        whitespace-nowrap
        text-right text-sm
        font-medium
      "
    >
      <a
       
        class="text-indigo-600 hover:text-indigo-900"
        href="/editarCliente.html"
  
        >Ver</a
      >
    </td>
  </tr>`
}

function obtenerPersonal(){
    return JSON.parse(localStorage.getItem("personal"));
}


let personal = obtenerPersonal();

function imprimirPersonal(clientes){
    let htmlClientes = "";
    clientes.forEach( d => {
        htmlClientes += mosntrarPersonal(d);
    })
    document.getElementById("personalAdmin").innerHTML = htmlClientes;
}


imprimirPersonal(personal);

