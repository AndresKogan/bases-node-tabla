
const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const color = require('colors');




crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
