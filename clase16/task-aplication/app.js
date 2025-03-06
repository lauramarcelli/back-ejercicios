const readlineSync = require('readline-sync');//para leer la entrada del usuario
const taskController = require('./controllers/taskController');

//Function principal que gestione el flujo de la aplicacion
function main() {
    let option
    do {
        console.log('\nGestor de Tareas');
        console.log('1. Ver tareas');
        console.log('2. Agregar tareas');
        console.log('3. Eliminar tareas');
        console.log('4. Salir');

        //leemos la opción seleccionada por el usuario
        option = readlineSync.question('Elija una opcion: ')

        //
        switch (option) {
            case '1':
                taskController.showTasks()//muestra las tareas
                break;
            case '2':
                taskController.addTask()//agregar una tareas
                break;
            case '3':
                taskController.removeTask()//eliminamos la tareas
                break;
            case '4':
                console.log('hasta luego');
                break;
            default:
                console.log('opcion invalida');                     
        }

    } while (option !== '4' ) // el ciclo sigue hasta que el usuario elija salir del ciclo
}


main()// llamamos a la funcion principal