class Locomotora { 
    constructor(peso,arrastre){
        this.peso= peso
        this.arrastre = arrastre




    }


    EsEficiente(){
        this.arrastre - (this.peso * 5)
    }



}


module.exports = Locomotora