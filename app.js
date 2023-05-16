
const { crearArchivoTabla } = require('./helpers/multiplicar');

const argv  = require('./config/yargs');

// const { argv } = require('process');
// console.log(process.argv);
// const [,,arg3= 'base=5' ] = process.argv;
// const [ , base=5 ] = arg3.split('=');

console.clear();



//Tabla de Multiplicar "for" 
// const base = 5;

crearArchivoTabla( argv )
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
