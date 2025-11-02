const VagonPasajero = require("./vagonDePasajeros")
const VagonCarga = require("./vagoncarga")
const vagonDormitorio = require("./vagonDormitorio")
const Locomotora = require("./locomotora")

class Tren {
    constructor(){
        this.vagones = []
        this.locomotoras = []
    }

    AgregarVagon(vagon){ this.vagones.push(vagon)}
    AgregarLocomotora(locomotora){this.locomotoras.push(locomotora)}
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

    velocidadLocomotora(){
        const velocidades = this.locomotoras.map((loc )=> {return loc.velocidad})
        return Math.min(...velocidades)
        // return Math.min(...this.locomotoras.velocidad)

    }
    EsEficiente(){//Si es eficiente; o sea, si todas sus locomotoras lo son.
        return this.locomotoras.every(loc =>loc.esEficiente())

    }
    PuedeMoverse(){
        
        const sumaDeArrastre = this.locomotoras.reduce((acc,curr) =>{
            acc+=curr.arrastre
            // console.log(acc)
            return (acc)},0) 
            
        


        // console.log("La suma del arrastre es:",sumaDeArrastre)
        // console.log("El peso de la formacion es:",this.PesoDeLaFormacion())
        return sumaDeArrastre>=this.PesoDeLaFormacion()


    }
    PesoDeLaFormacion(){
        const PesoVagones = this.vagones.reduce ((acc,curr) =>acc+=curr.PesoMaximo(),0)
        const PesoLocomotoras = this.locomotoras.reduce ((acc,curr) =>acc+=curr.peso,0)
        return PesoVagones+ PesoLocomotoras
        // console.log(PesoVagones)
        // console.log(PesoLocomotoras)

    }

    EmpujeFaltante(){
     
        const sumaDeArrastre = this.locomotoras.reduce((acc,curr )=> acc+= curr.arrastre,0)
        return Math.max(0,this.PesoDeLaFormacion()-sumaDeArrastre) //Lo hice sobre todas las locomotras,(chequear)


    }
    EsCompleja(){
        const cantidadDeUnidades = this.vagones.length+this.locomotoras.length
        console.log(this.PesoDeLaFormacion())
        console.log(cantidadDeUnidades)
        return cantidadDeUnidades>8 || this.PesoDeLaFormacion()>80000 
    }

    }









module.exports = Tren;

//Locomotora

const locom = new Locomotora(1000,50,7000)//peso,velocidad,arrastre
const locomo = new Locomotora(1000,100,6000)
const locmo = new Locomotora(1000,10,2000)

//Vagones y tren
const elTren = new Tren()
const Vp = new VagonPasajero(4,10,true,false)//pesa ->9100,
const Vc = new VagonCarga(2000,2)//pesa -> 3500
const Vcd = new VagonCarga(2000,2)
const Vd = new vagonDormitorio(4,5)// pesa -> 5300

elTren.vagones.push(Vp)
elTren.vagones.push(Vc)
elTren.vagones.push(Vd)
elTren.vagones.push(Vcd)

elTren.locomotoras.push(locom)// pesa -> 1000
elTren.locomotoras.push(locmo)// pesa -> 1000
elTren.locomotoras.push(locomo)// pesa -> 1000
// console.log(elTren.EmpujeFaltante())
console.log(elTren.EsCompleja())
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


