const Vagon = require("./vagon")

class vagonDormitorio extends Vagon{ 
    constructor(compartimentos,camas){
        super()
        this.compartimentos = compartimentos
        this.camas = camas
    }
    EstaOrdenado(){
        return(true)
    }
    cantidadDePasajeros(){

        return(this.compartimentos*this.camas)}
    TieneBanios(){
        return(true)
    }
    MaximoCarga(){return(1200)}
    PesoMaximo(){return(4000+(80*this.cantidadDePasajeros())+this.MaximoCarga())}
    RecibirMantenimiento(){}
}

module.exports = vagonDormitorio