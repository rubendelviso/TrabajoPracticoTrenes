const Vagon = require("./vagon")

class VagonPasajero extends Vagon{ 
    constructor (ancho,largo,tienebanio,estaordenado){
        super()
        this.ancho = ancho
        this.largo= largo
        this.tienebanio = tienebanio
        this.estaordenado = estaordenado
    }
    TieneBanios(){
        return(this.tienebanio)
    }

    EstaOrdenado(){

        return (this.estaordenado)
    }
    MaximoCarga(){
        return(this.tienebanio?300:800)
    }
    RecibirMantenimiento(){
        this.estaordenado?this.estaordenado:this.estaordenado = true
        

    }
    cantidadDePasajeros(){

        const restaPasajero= this.estaordenado?0:15 

        if (this.largo ===10 && this.ancho === 2){
            return ((this.estaordenado?80:65)-restaPasajero)
            
        }
        else if(this.largo ===10 && this.ancho === 4){
            // console.log("Holaa")
            
            return ((this.estaordenado?100:85)-restaPasajero)
        }
        else
            return( (this.estaordenado?"cambiar":"preguntar"))
    }
    PesoMaximo(){
        
        
        return (2000+ (80 * this.cantidadDePasajeros())+this.MaximoCarga())

    }
    



}


//Prueba
// const v1 = new VagonPasajero(4,10,true,true)
// console.log(v1)
// console.log(v1.cantidadDePasajeros())

module.exports = VagonPasajero