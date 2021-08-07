


let habitaciones = [];
let descripcion1 = "Las habitaciones individuales, con 18 m2"
let descripcion2 = "Suites con 38 m2. Habitación con cama Queen"
let descripcion3 = "Suites con 55 m2 a 65 m2. Gran cama King"
let descripcion4 = "Suites con 38 m2. Habitación con cama Queen size.2"
let descripcion5 = "En el ala del edificio que da al jardín"
let descripcion6 = "Las habitaciones tienen entre 25 m2 y 35 m2"


habitaciones.push(new Habitacion(1,600,2,"Habitación Familiar",descripcion1,"https://www.oroverdeguayaquil.com/es/files/4334/OVG_Leading_Suite_King_Bed_2.jpg"));
habitaciones.push(new Habitacion(2,500,2,"Habitación Familiar",descripcion2,"https://www.oroverdeguayaquil.com/es/files/4334/Suite_Presidencial_sala_2.jpg"));
habitaciones.push(new Habitacion(3,400,2,"Habitación Familiar",descripcion3, "https://www.oroverdeguayaquil.com/es/files/4334/Suite_Presidencial_Bedroom.jpg"));
habitaciones.push(new Habitacion(4,300,2,"Habitación Familiar",descripcion4, "https://www.oroverdeguayaquil.com/es/files/4334/Suite_Presidencial_Ba%C3%B1o_072019.jpg"));
habitaciones.push(new Habitacion(5,200,2,"Habitación Familiar",descripcion5, "https://www.oroverdeguayaquil.com/es/files/4334/Suite_Presidencial_sala_4.jpg"));
habitaciones.push(new Habitacion(6,100,2,"Habitación Familiar",descripcion6, "https://www.oroverdeguayaquil.com/es/files/4334/Suite_Premium_floor_retouch2019.jpg"));





const crearHabitacion = (d) => {
      return  `<a class="card" href="./compra.html" onclick="comprobarID(${d.id})">
        <div class="card__background" style="background-image: url(${d.imagen})"></div>
        <div class="card__content">
          <p class="card__category">${d.tipo}</p>
          <h3 class="card__heading" style="font-size:20px">${d.descripcion}</h3>
          <h3 class="card__heading" style="color: #DDDDDD">${d.precio}$</h3>
        </div>
      </a>`    
}

function imprimirHabitaciones(habitaciones) {
    let htmlHabitaciones ="";
    habitaciones.forEach(d => {
        htmlHabitaciones += crearHabitacion(d);
    })
    document.getElementById("contenedorH").innerHTML = htmlHabitaciones;
    console.log(htmlHabitaciones);
}

comprobarID = (id) => {
  let habitacion =  habitaciones.find(d => d.id === id);
  localStorage.setItem("seleccionada",JSON.stringify(habitacion));
}

imprimirHabitaciones(habitaciones);
