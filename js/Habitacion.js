
class Habitacion{
    constructor(id, precio, nPersonas, tipo, descripcion, imagen){
        this._id = id;
        this._precio = precio;
        this._nPersonas = nPersonas;
        this._tipo = tipo;
        this._descripcion = descripcion;
        this._imagen = imagen;
    }

    get precio(){
        return this._precio;
    }

    get id(){
        return this._id;
    }
    get nPersonas(){
        return this._nPersonas;
    }
    get tipo(){
        return this._tipo;
    }

    get descripcion(){
        return this._descripcion;
    }

    get imagen(){
        return this._imagen;
    }

    set precio(precio){
        this._precio = precio;
    }

    set id(id){
        this._id = id;
    }

    set nPersonas(nPersonas){
        this._nPersonas = nPersonas;
    }

    set descripcion(descripcion){
        this._descripcion = descripcion;
    }
    
    set imagen(imagen){
        this._imagen = imagen;
    }

    
}