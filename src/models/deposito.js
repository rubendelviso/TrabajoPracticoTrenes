const tren = require("./tren")
const Locomotora = require("./locomotora")


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
}
//Agrego deposito
const depo = new deposito()


const locom = new Locomotora(1000,50,7000)//peso,velocidad,arrastre
const locomo = new Locomotora(1000,100,6000)
const locmo = new Locomotora(1000,10,2000)

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

elTren.locomotoras.push(locom)// pesa -> 1000
elTren.locomotoras.push(locmo)// pesa -> 1000
elTren.locomotoras.push(locomo)// pesa -> 1000

depo.AgregarFormacion(elTren)
depo.ConductorExperimentado()

