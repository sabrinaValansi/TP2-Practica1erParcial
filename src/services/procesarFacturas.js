import fs from 'fs'

const procesarFacturas = {

    procesarFacturas() {

        console.log("Comenzando proceso..")

        setTimeout(()=> {       
    
        const facturasProc = this.ordenarFacturasPorImporte(this.leerFacturas())

        this.escribirOutput(facturasProc)
        
        console.log("Proceso Finalizado.")

        }, 7000);

        
    },

    leerFacturas() {
        const facturas = JSON.parse(fs.readFileSync('./src/resources/input.json','utf-8'))

        return facturas
    },
    
    ordenarFacturasPorImporte(facturas) {
        //de mayor a menor
        facturas.sort((b,a) => a.importe - b.importe);
        return facturas
    },

    escribirOutput(facturas) {
        
        fs.writeFileSync('./src/resources/output.json',JSON.stringify(facturas,null, 4))

        console.log('Output grabado OK')
    },

    facturasMayores(importe,facturas) {
        
        return facturas.filter(factura => factura.importe > importe )
    },
    
    listaFacturasUsd(facturas) {

        const facturas2 = facturas.map(

            factura => {
                return { numero: factura.id, sucursal: factura.sucursal, importeusd: factura.importe/200 } } )

        return facturas2

    },

    sumaImportes(facturas) {
        
        return facturas.reduce((suma, factura) => ( suma + factura.importe),0);

    },

}

export {procesarFacturas}

