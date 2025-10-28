const VagonPasajero = require("../models/vagonDePasajeros")
const VagonCarga = require("../models/vagoncarga")
const VagonDormitorio = require("../models/vagonDormitorio")
const Tren = require("../models/tren")

describe("----Testeando requerimientos ----", () => {
    test("Probando cuantos pasajeros puede llevar el vagon de pasajeros", () => {
        const trensito = new Tren()
        const vp = new VagonPasajero(4, 10, true, true)//tiene que dar 100
        const vd = new VagonDormitorio(4,2)
        trensito.AgregarVagon(vp)
        trensito.AgregarVagon(vd)
        expect(trensito.CantidadDePasajeros()).toBe(108)
    })

    test("Probando cantidad de vagones populares que tiene", ()=>
    {
        const trensito = new Tren ()
        const vp = new VagonPasajero(4, 10, true, true)//tiene que dar 100
        const vd = new VagonDormitorio(4,2)
        trensito.AgregarVagon(vp)
        trensito.AgregarVagon(vd)
        expect(trensito.VagonesPopulares()).toBe(1)
    })
    test("Probando unidad de carguero", ()=>
    {
        const trensito = new Tren ()
        const vp = new VagonPasajero(4, 10, true, true)
        const vd = new VagonDormitorio(4,2)

        const vc = new VagonCarga(1,1)
        const vcuno = new VagonCarga(1,1)
        const vcdos = new VagonCarga(1,1)
        const vdor= new VagonDormitorio(1,1)
        trensito.AgregarVagon(vc)
        trensito.AgregarVagon(vcuno)
        trensito.AgregarVagon(vcdos)
        // trensito.AgregarVagon(vdor)
        expect(trensito.VerificarCarguero()).toBe(true)
    })

    test("Probando dispersion de pesos", ()=>
    {
        const trensito = new Tren ()
        const vp = new VagonPasajero(4,10,true,true) // Esto da error
        // console.log(vp)
        // const vd = new VagonDormitorio(4,2)

        const vc = new VagonCarga(1000,1)
        const vcuno = new VagonCarga(20,1)
        const vcdos = new VagonCarga(500,1)
        // const vdor= new VagonDormitorio(1,1)
        trensito.AgregarVagon(vc)
        trensito.AgregarVagon(vcuno)
        trensito.AgregarVagon(vcdos)
        trensito.AgregarVagon(vp)
        // console.log(trensito)

        // trensito.AgregarVagon(vd)
        // trensito.AgregarVagon(vdor)
        // trensito.AgregarVagon(vdor)
        expect(trensito.DispersionDePesos()).toBe(9180)
    })

    
    // test("Probando cuantos pasajeros puede llevar el vagon de dormitorios", () => {
    //     const trensito = new Tren()
    //     const vd = new VagonDormitorio(4, 10)
    //     trensito.AgregarVagon(vp)
    //     expect(vp.CantidadDePasajeros()).toBe(70)
    // })
    test("Probando Cantidad de Baños que tiene la formacion", ()=>
    {
        const trensito = new Tren ()
        const vp = new VagonPasajero(4,10,false,true) // No lleva baños este
        // console.log(vp)
        // const vd = new VagonDormitorio(4,2)

        const vc = new VagonCarga(1000,1) //Los de carga no llevan banio
        
        const vdor= new VagonDormitorio(1,1)
        const vdordos= new VagonDormitorio(1,1)
        trensito.AgregarVagon(vc)
        trensito.AgregarVagon(vdor)
        trensito.AgregarVagon(vdordos)
        trensito.AgregarVagon(vp)
        // console.log(trensito)

        // trensito.AgregarVagon(vd)
        // trensito.AgregarVagon(vdor)
        // trensito.AgregarVagon(vdor)
        expect(trensito.VerificarCantidadDeBaños()).toBe(2)
    })    
    test("Probando Hacer mantenimiento a la formacion", ()=>
    {
        const trensito = new Tren ()
        const vp = new VagonPasajero(4,10,false,false) // El ultimo atributo es si esta ordenado
        // vp.RecibirMantenimiento()
        // expect(vp.EstaOrdenado()).toBe(true)

        const vc = new VagonCarga(1000,2) //
        const vdor= new VagonDormitorio(1,4)
        const vdordos= new VagonDormitorio(1,4)
        trensito.AgregarVagon(vc)
        trensito.AgregarVagon(vdor)
        trensito.AgregarVagon(vdordos)
        trensito.AgregarVagon(vp)
        
        
        trensito.HacerMantenimiento()
        expect(trensito.RecibieronMantenimiento()).toBe(true)
    })


})