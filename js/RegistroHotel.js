class RegistroHotel{

    constructor(){
        this._reservas = [];
        let reservasLocales = localStorage.getItem("reservas");
        if(reservasLocales!=null){
            this._reservas = JSON.parse(reservasLocales);
        }else{
            this._reservas = [];
        }
    }

    get reservas(){
        return this._reservas;
    }

    set reservas(reservas){
        this._reservas = reservas;
    }

    actualizarReserva(){
        localStorage.setItem("reservas",JSON.stringify(this._reservas));
    }

    crearReserva(reserva){
        this._reservas.push(reserva);
        this.actualizarReserva();
    }
    
}