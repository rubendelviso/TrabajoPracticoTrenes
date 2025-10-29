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
        test("Tests pedidos", ()=>
    {
        const trensito = new Tren ()
        const vp = new VagonPasajero(4,10,true,true) // El ultimo atributo es si esta ordenado
        const vpDO = new VagonPasajero(2,7,false,false)
        

        const vc = new VagonCarga(6800,5) //
        const vdor= new VagonDormitorio(8,3)
        
        trensito.AgregarVagon(vp)
        trensito.AgregarVagon(vpDO)
        trensito.AgregarVagon(vc)
        trensito.AgregarVagon(vdor)
        console.log("\tvagon 1:\tCantidad de pasajeros:",vp.cantidadDePasajeros(),"\tPeso maximo:",vp.PesoMaximo(),"\tCarga Maxima:",vp.MaximoCarga(),"\tTiene Baño:",vp.TieneBanios())

        console.log("\tvagon 2:\tCantidad de pasajeros:",vpDO.cantidadDePasajeros(),"\tPeso maximo:",vpDO.PesoMaximo(),"\tCarga Maxima:",vpDO.MaximoCarga(),"\tTiene Baño:",vpDO.TieneBanios())

        console.log("\tvagon 3:\tCantidad de pasajeros:",vc.cantidadDePasajeros(),"\tPeso maximo:",vc.PesoMaximo(),"\tCarga Maxima:",vc.MaximoCarga(),"\tTiene Baño:",vc.TieneBanios())
        console.log("\tvagon 4:\tCantidad de pasajeros:",vdor.cantidadDePasajeros(),"\tPeso maximo:",vdor.PesoMaximo(),"\tCarga Maxima:",vdor.MaximoCarga(),"\tTiene Baño:",vdor.TieneBanios())
        console.log(trensito.VagonesPopulares())            
        vp.RecibirMantenimiento()
        vpDO.RecibirMantenimiento()
        vc.RecibirMantenimiento()
        vdor.RecibirMantenimiento()
        

        console.log("--------------Despues de hacer mantenimiento-------------")
        
        console.log("\tvagon 1:\tCantidad de pasajeros:",vp.cantidadDePasajeros(),"\tPeso maximo:",vp.PesoMaximo(),"\tCarga Maxima:",vp.MaximoCarga(),"\tTiene Baño:",vp.TieneBanios())

        console.log("\tvagon 2:\tCantidad de pasajeros:",vpDO.cantidadDePasajeros(),"\tPeso maximo:",vpDO.PesoMaximo(),"\tCarga Maxima:",vpDO.MaximoCarga(),"\tTiene Baño:",vpDO.TieneBanios())

        console.log("\tvagon 3:\tCantidad de pasajeros:",vc.cantidadDePasajeros(),"\tPeso maximo:",vc.PesoMaximo(),"\tCarga Maxima:",vc.MaximoCarga(),"\tTiene Baño:",vc.TieneBanios())
        console.log("\tvagon 4:\tCantidad de pasajeros:",vdor.cantidadDePasajeros(),"\tPeso maximo:",vdor.PesoMaximo(),"\tCarga Maxima:",vdor.MaximoCarga(),"\tTiene Baño:",vdor.TieneBanios())        
        
        
        
        console.log(trensito.VagonesPopulares())
        
        
    })


})