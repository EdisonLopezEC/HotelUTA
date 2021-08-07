class Reserva{

    constructor(cliente, fechaIngreso, fechaSalida, nPersonas, habitacion){
        this._cliente = cliente;
        this._fechaIngreso = fechaIngreso;
        this._nPersonas = nPersonas;
        this._fechaSalida = fechaSalida;
        this._habitacion = habitacion;
    }

    get cliente(){
        return this.cliente;
    }

    get fechaIngreso(){
        return this.fechaIngreso;
    }

    get fechaSalida(){
        return this.fechaSalida;
    }

    get nPersonas(){
        return this.nPersonas;
    }
    get habitacion(){
        return this.habitacion;
    }

    set cliente(cliente){
        this._cliente = cliente;
    }
    set fechaIngreso(fechaIngreso){
        this._fechaIngreso = fechaIngreso;
    }
    set fechaSalida(fechaSalida){
        this._fechaSalida = fechaSalida;
    }
    set nPersonas(nPersonas){
        this._nPersonas = nPersonas;
    }

    set habitacion(habitacion){
        this.habitacion = habitacion;
    }

    






}