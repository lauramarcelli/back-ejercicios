const taskModel = require ('../models/taskModel')
const taskView = require ('../views/taskView')

function showTasks() {
    const tasks = taskModel.readTasks()//leemos las tareas del modelo
    taskView.displayTasks(tasks)//mostramos las tareas usando la vista
}

//funcion para agregar la tarea
function addTask() {
    const taskDescription = taskView.promptForTask()// ingrese la descipcion de la tarea
    const tasks = taskModel.readTasks()//leeemos la tareas actuales
    tasks.push({description : taskDescription, completed: false}) //agregamos la nueva tarea a la lista
    taskModel.saveTasks(tasks) // guardamos las tareas actualizadas en el json
    taskView.confirmationMessage('Tarea agregada')// mostranos un msj de confirmacion 
}

//funcion para eliminar la tarea
function removeTask() {
    const tasks = taskModel.readTasks()// leemos las tareas
    //si no hay tareas guardadas en el arreglo, entonces no hay tareas para eliminar
    if (tasks.length === 0) {
        taskView.addTask('No hay tareas para eliminar')
        return;
    }
    const taskId = taskView.promptForTaskId(tasks)//pedimos al usuario que elija una tarea para eliminar
    tasks.splice(taskId, 1 )//eliminamos la tarea seleccionada
    taskModel.saveTasks(tasks)
    taskView.confirmationMessage('Tarea eliminada')//mostramos la confirmacion 
}

//exportamos las funciones
module.exports = { showTasks, addTask, removeTask }