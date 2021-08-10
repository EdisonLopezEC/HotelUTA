class Personal{
    constructor(nombre, cedula, cargo, salario){
        this._nombre = nombre;
        this._cargo = cargo;
        this._salario = salario;
        this._cedula = cedula;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set cargo(cargo){
        this._cargo = cargo;
    }

    set salario(salario){
        this._salario = salario;
    }

    set cedula(cedula){
        this._cedula = cedula;
    }

    get nombre(){
        return this._nombre;
    }
    get cedula(){
        return this._cedula;
    }
    get cargo(){
        return this._cargo;
    }
    get salario(){
        return this._salario;
        
    }

}
