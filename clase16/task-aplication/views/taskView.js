const readlineSync = require('readline-sync')


//funcion para mostrar todas la tareas
function displayTasks(tasks) {
    if (tasks.length === 0){
        console.log('No hay tareas');
    } else {
        console.log('Tareas: ');
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.description} - ${task.completed ? 'Completada' : 'Pendiente'}`);
        })
    }
}

//funcion para pedir la descirpcion de las tareas nuevas
function promptForTask() {
    return readlineSync.question('Ingrese la descripcion de la tarea: ')
}

//funcion para pedir al usuario el ide de una tarea a eliminar tarea 
function promptForTaskId(tasks) {
    const taskId = readlineSync.question('Ingrese el numero de la tarea a eliminar: ') -1
    if (taskId < 0 || taskId >= tasks.length) {
        console.log('Tarea no valida');
        return -1;
        
    }
}

//funcion para mostras mensaje de confirmacion

function confirmationMessage(message) {
    console.log(message);
    
}

//exportacion
module.exports = { displayTasks, promptForTask, promptForTaskId, confirmationMessage }