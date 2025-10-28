const Vagon = require("./vagon")


class VagonCarga extends Vagon { 
    constructor(cargaIdeal, maderasSueltas){
        super()
        this.cargaIdeal = cargaIdeal
        this.maderasSueltas=maderasSueltas

    }
    EstaOrdenado(){
        if (this.maderasSueltas)return( false)
        else return (true)

    }
    MaximoCarga(){
        // console.log(this.cargaIdeal- ( 400 * this.maderasSueltas))
        return (this.cargaIdeal- ( 400 * this.maderasSueltas))
    }
    PesoMaximo(){
        
        return (this.MaximoCarga()+1500)}
    TieneBanios(){return false}
    cantidadDePasajeros(){return 0}
    RecibirMantenimiento(){
        if (this.maderasSueltas >= 2){this.maderasSueltas-=2}
        else if(this.maderasSueltas ===1){this.maderasSueltas= 0}
        // Math.min(0,this.maderasSueltas-=2)
    }

}
//Prueba
// const Vag = new VagonCarga(2000,2)
// Vag.RecibirMantenimiento()
// Vag.RecibirMantenimiento()
// Vag.RecibirMantenimiento()
// console.log(Vag.maderasSueltas)

module.exports = VagonCarga