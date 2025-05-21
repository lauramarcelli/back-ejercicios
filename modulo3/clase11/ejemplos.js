//async

async function saludo() {
    console.log('Hola chicas');
}
//llamamos a la funcion y manejamos la promesa resultante con .then. Si "saludo" se resuelve imprime el mensaje en la consola
saludo().then((mensaje) => {
    console.log(mensaje);
});

//await
//funcion que simula un proceso asincrono
function procesoLargo() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Proceso completado'), 2000)
    })
}
//funcion principal que usara el await para esperar el resultado
async function ejecutarProceso(){
    console.log('Iniciando proceso...');

    //PAUSA la ejecucion proceso largo
    const resultado = await procesoLargo();
    console.log(resultado);//muestra el proceso completado

    console.log('Proceso finalizado');
}

ejecutarProceso();

//async- await-
//funcion que solicita datos, con una opcion de exito o error

function obtenerDatos(exito) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(exito){
                console.log("Datos obtenidos con exito");
            } else {
                reject
            }
        }, 2000)
    })
}

//funcion asincrona que intenta obtener los datos y manejar los posibles errores

async function consultarDatos() {
    try {
        console.log("Intentando obtener los datos...");
        
        //pausa hasta que obtenerDatos se completa o atrapa un error si ocurre
        const resultado = await obtenerDatos(false);
        console.log(resultado);
    } catch (error) {
        console.error("Error al obtener los datos", error);
    } finally {
        console.log("Proceso finalizado");
    }
}

consultarDatos()

//BLOQUEO

//funciones que simulan tarea

function tareaAsincrona1(){
    return new Promise((resolve) => {
        setTimeout(() => resolve('Tarea completada 1'), 2000)
    })
}

function tareaAsincrona2(){
    return new Promise((resolve) => {
        setTimeout(() => resolve('Tarea completada 2'), 2000)
    })
}

function tareaAsincrona3(){
    return new Promise((resolve) => {
        setTimeout(() => resolve('Tarea completada 3'), 1000)
    })
}

//funcion ppal para ejecutar tareas
async function ejecutarTareas(){
    try {
    const promesa1 = tareaAsincrona1();
    const promesa2 = tareaAsincrona2();
    const promesa3 = tareaAsincrona3();
    
    const resultados = await Promise.all([promesa1, promesa2, promesa3]);
    console.log(resultados);
    } catch (error) {
        console.error(error);
    }
}

ejecutarTareas()
