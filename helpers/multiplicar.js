const fs = require('fs');
const color = require('colors');


 const  crearArchivo =  async (base, l, h) => {
try {
    let salida = '';

    for (let index = 1; index <= h; index++) {

        salida += `${base} * ${index} = ${base * index}\n`;

    }
    if (l){
    console.log(salida.rainbow);
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;

} catch (error) {
    throw error;
    
}
    

}

module.exports = {
    crearArchivo
}