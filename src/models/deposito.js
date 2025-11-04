const tren = require("./tren")
const Locomotora = require("./locomotora")
const VagonPasajero = require("./vagonDePasajeros")
const VagonCarga = require("./vagoncarga")
const vagonDormitorio = require("./vagonDormitorio")


class deposito {
    constructor(){

        this.formaciones = []
        this.locomotorasSueltas = []
    }
AgregarFormacion(formacion){this.formaciones.push(formacion)}
AgregarLocomotora(locomotora){this.locomotorasSueltas.push(locomotora)}
ConductorExperimentado(){  
    this.formaciones.some(fr => fr.EsCompleja())


}

locomotoraAFormacion(formacion){
    if (this.locomotorasSueltas.length === 0) { return "No hay locomotoras disponibles"}
    // console.log(formacion.PesoDeLaFormacion())  
    const LocEncontrada = this.locomotorasSueltas.find(loc=> loc.arrastre>= formacion.PesoDeLaFormacion())

    if (LocEncontrada) {formacion.locomotoras.push(LocEncontrada);return (formacion)}
    else{return("No hay locomotoras con la fuerza de arrastre necesaria")}

}
}
//Agrego deposito
const depo = new deposito()


const locom = new Locomotora(1000,50,2130)//peso,velocidad,arrastre
const locomo = new Locomotora(1000,100,6000)
const locmo = new Locomotora(1000,10,21300)

//Vagones y tren
const elTren = new tren()
const Vp = new VagonPasajero(4,10,true,false)//pesa ->9100,
const Vc = new VagonCarga(2000,2)//pesa -> 3500
const Vcd = new VagonCarga(2000,2)
const Vd = new vagonDormitorio(4,5)// pesa -> 5300

elTren.vagones.push(Vp)
elTren.vagones.push(Vc)
elTren.vagones.push(Vd)
elTren.vagones.push(Vcd)
depo.locomotorasSueltas.push(locom)
depo.locomotorasSueltas.push(locomo)
depo.locomotorasSueltas.push(locmo)
console.log(depo.locomotoraAFormacion(elTren))
// elTren.locomotoras.push(locom)// pesa -> 1000
// elTren.locomotoras.push(locmo)// pesa -> 1000
// elTren.locomotoras.push(locomo)// pesa -> 1000   

// depo.AgregarFormacion(elTren)
// depo.ConductorExperimentado()

