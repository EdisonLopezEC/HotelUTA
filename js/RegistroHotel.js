class RegistroHotel{

    constructor(){
        this._personal=[];
        this._reservas = [];
        let personalLocales = localStorage.getItem("personal");
        let reservasLocales = localStorage.getItem("reservas");
        if(personalLocales!=null){
            this._personal = JSON.parse(personalLocales);
        }else{
            this._personal = [];
        }
        if(reservasLocales!=null){
            this._reservas = JSON.parse(reservasLocales);
        }else{
            this._reservas = [];
        }
    }

    get personal(){
        return this._personal;
    }

    set personal(personal){
        this._personal = personal;
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


    crearPersonal(personal){
        this._personal.push(personal);
        this.actualizarPersonal();
    }
    
    actualizarPersonal(){
        localStorage.setItem("personal",JSON.stringify(this._personal));
    }

}