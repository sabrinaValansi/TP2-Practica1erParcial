import {facturas} from '../modelos/facturas.js'


console.log("----FOREACH----");
facturas.forEach(elemento => console.log(elemento));

console.log("\n----SORT MENOR A MAYOR----");
facturas.sort((a,b)=> a.importe-b.importe);
console.log(facturas);

console.log("\n----SORT MAYOR A MENOR----");
facturas.sort((b,a)=> a.importe-b.importe);
console.log(facturas);

console.log("\n----FILTER----");
const factFiltrada = facturas.filter(elemento => elemento.importe>5000);
console.log(factFiltrada);

console.log("\n----MAP----");
const nuevaFact=facturas.map(elemento=>{return{factNro:elemento.numero,precio:elemento.importe}})
console.log(nuevaFact);

console.log("\n----REDUCE----");
let total = facturas.reduce((acum,elemento)=>acum+elemento.importe,0);
console.log("El total facturado es " + total);

console.log("\n----------ARCHIVOS-----------");
import fs from 'fs';

console.log("\n----LECTURA----");

const datos = fs.readFileSync('../modelos/texto.txt','utf-8');
console.log(datos);