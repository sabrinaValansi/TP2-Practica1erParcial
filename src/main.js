import fs from 'fs'
console.log("Hola");
//import {facturas} from './modelos/facturas.js'

import {procesarFacturas} from './services/procesarFacturas.js'

procesarFacturas.procesarFacturas()

//console.log(procesarFacturas.ordenarFacturas())

//const facturas = JSON.parse(fs.readFileSync('./src/resources/cajas.json','utf-8'));

/*
try {

fs.writeFileSync('./src/resources/input.json',JSON.stringify(facturas))
    
} catch (err) {
    console.log(err)
}

*/    


/*
funA()
//ejemplo esto se podría solucionar con callbacks? Ver.
function funA(){
    console.log(1)
    funB()
    console.log(2)
}

function funB(){
    console.log(3)
    funC()
    console.log(4)
}

function funC(){
    console.log(5)
}
*/
    
