const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        if (listado.length > 0) {
            for (let tarea of listado) {
                console.log(colors.green("============Por hacer=========="));
                console.log(tarea.descripcion);
                console.log('Estado:', tarea.completado);
                console.log(colors.green("==============================="));
            }
        }  else console.log(colors.cyan('No hay ninguna tarea por hacer.'));      
        break;
    case 'actualizar':
        let result = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(result);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no es reconocido');
}