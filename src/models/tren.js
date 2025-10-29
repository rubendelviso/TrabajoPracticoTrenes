const VagonPasajero = require("./vagonDePasajeros")
const VagonCarga = require("./vagoncarga")
const vagonDormitorio = require("./vagonDormitorio")

class Tren {
    constructor(){
        this.vagones = []
    }

    AgregarVagon(vagon){ this.vagones.push(vagon)}
    VagonesPopulares(){
        return(this.vagones.filter( (v)=>v.cantidadDePasajeros()>50).length)
    }
    CantidadDePasajeros(){
        const suma = this.vagones.reduce((acc,v) =>{ 
            // console.log(v.cantidadDePasajeros())
            return(acc+=v.cantidadDePasajeros())

        },0)
        // console.log(suma)
        return (suma)
    }
    VerificarCarguero(){
        return (this.vagones.every(v => v.PesoMaximo()>=1000))
    }
    DispersionDePesos() {

        const acu = this.vagones.map( (v)=> {
            return(v.PesoMaximo())   

        },)
        // console.log(acu)
        
        // console.log(Math.max(...acu),Math.min(...acu))
        const resultado = Math.max(...acu) - Math.min(...acu)
        // console.log(resultado)

        return (resultado)
        

    }

    VerificarCantidadDeBaños(){
        //5. Cuántos baños tiene una formación, que se obtiene como la cantidad de vagones que tienen baños (se supone que cada vagón que tiene baños, tiene uno solo).

        return(this.vagones.filter(v => v.TieneBanios()).length)

    }
    HacerMantenimiento (){

      this.vagones.forEach(function(curr,i,arr){
        curr.RecibirMantenimiento()   //Le hago el mantenimiento a todos si no especifica
      })  }

    RecibieronMantenimiento(){ 
        return(this.vagones.every(v => v.EstaOrdenado()))



    }

    
//     Otro punto, un poco más salados
// Poder pedirle a una formación lo siguiente:
// Si está equilbrada en pasajeros, o sea: si considerando sólo los vagones que llevan pasajeros, la diferencia entre el que más lleva y el que menos no supera los 20 pasajeros.
    EstaEquilibrada() {
        //Vagones que llevan pasajeros -> vagon dormitorio - vagon pasajero

        const FiltroVagon = this.vagones.filter(vag => (vag instanceof vagonDormitorio) || (vag instanceof VagonPasajero))

        const filtroPosta = this.vagones.map((vag)=> {
            
            if (vag instanceof vagonDormitorio) return vag.cantidadDePasajeros()
            else if (vag instanceof VagonPasajero)return vag.cantidadDePasajeros()
            else return (0)
        })
        while (filtroPosta.some(n => n===0)===true){
        filtroPosta.splice(filtroPosta.findIndex(n => n === 0),1)}

        return( (Math.max(...filtroPosta) - Math.min(...filtroPosta))>20?false:true)

    }


}



module.exports = Tren;

//Vagones y tren
const elTren = new Tren()
const Vp = new VagonPasajero(4,10,true,false)
const Vc = new VagonCarga(2000,2)
const Vcd = new VagonCarga(2000,2)
const Vd = new vagonDormitorio(4,5)

elTren.vagones.push(Vp)
elTren.vagones.push(Vc)
elTren.vagones.push(Vd)
elTren.vagones.push(Vcd)

// console.log("\nel tren:\n",elTren)
// console.log(elTren.EstaEquilibrada())


// const trensito= new tren()
// trensito.AgregarVagon(Vd)
// console.log(trensito.VagonesPopulares())

// trensito.AgregarVagon(Vc)
// console.log(trensito.VagonesPopulares())
// console.log(Vc.PesoMaximo())
// trensito.AgregarVagon(Vp)
// console.log(trensito.VagonesPopulares())


