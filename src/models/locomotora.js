
class Locomotora {
    constructor(peso,velocidad,arrastre){
        this.peso = peso
        this.velocidad = velocidad
        this.arrastre = arrastre


    }
esEficiente(){
    return this.peso*5 < this.arrastre   //deberia devolver true 

}
PesoMaximo(){
    return this.peso


}
velocidadMaxima(){
    return this.peso

}
}




//------------Pruebitaas   (comentar)

const locomotora=  new Locomotora(1000,100,3000)


// console.log(locomotora.esEficiente())

module.exports = Locomotora