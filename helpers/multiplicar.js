const fs = require('fs');

const crearArchivoTabla = async ( { base = 5, listar  } =argv ) =>{
    try {
        let salida = '';

        for(let i = 1; i <= 10; i++){
            salida += `${ base } x ${ i } = ${base * i} \n`;
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        let nombreArchivo = `tabla-${base}.txt`;

        listar && console.log(salida);
        

        return nombreArchivo;
    } catch (error) {
        return error;
    }
}

module.exports = {
    crearArchivoTabla
}