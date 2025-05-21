/*1. Simulación de Tiempo de Respuesta de un Servidor
Imagina que quieres simular cómo responde un servidor cuando un cliente
realiza una petición. Para este ejercicio, el servidor tiene un tiempo de respuesta
variable (aleatorio) entre 1 y 3 segundos. Debes escribir una función llamada
simulacionServidor que simule este comportamiento utilizando async y await.
La función deberá:
• Tener un retardo de tiempo aleatorio.
• Retornar el mensaje "Servidor listo" una vez que haya transcurrido el
tiempo.
Este ejercicio te ayudará a entender cómo gestionar el tiempo en procesos
asíncronos, fundamental cuando trabajamos con peticiones de red en el
desarrollo web*/

function simulacionServidor(){
    return new Promise((resolve) =>{
        setTimeout(() => resolve('Servidor listo'), Math.floor(Math.random() * 3000) + 1000)
    })
}

async function ejecutarServidor(){
    console.log('Iniciando proceso...');
    const resultado = await simulacionServidor();
    console.log(resultado);
    console.log('Proceso finalizado');
}

ejecutarServidor()

/*2. Lectura de Datos con Retraso Simulado y Manejo de Errores
Escribe una función que simule la obtención de datos de una base de datos o
API. La función debe simular un retraso de 2 segundos para obtener los datos.
Sin embargo, en ocasiones esta operación puede fallar (simula este fallo
lanzando un error manualmente).
Detalles:
• Utiliza async y await para hacer que la función sea asíncrona.
• Usa try/catch para capturar posibles errores.
• Si todo va bien, muestra el mensaje "Datos obtenidos con éxito".
• En caso de error, muestra "Error al leer datos".
Esta simulación es muy útil para ver cómo manejar errores en operaciones de
obtención de datos, una tarea común en programación backend*/

function obtenerDatos(exito){
    return new Promise((resolve, reject) => setTimeout(()=>{
        if(exito){
            resolve('Datos obtenidos con exito')
        } else {
            reject('Error al leer datos')
        }
    }), 2000)
}

async function consultarDatos(){
    try {
        console.log('Intentando obtener los datos...');
        console.log(await obtenerDatos(true));
    } catch (error){
        console.log('Error al obtener los datos');
    } finally {
        console.log('Proceso finalizado');
    }
}

consultarDatos()

/*3. Ejecución de Múltiples Consultas en Paralelo
Simulemos un caso donde un sistema necesita realizar varias consultas a
distintos servicios externos de manera simultánea. Escribe tres funciones que
simulen una consulta, cada una con un tiempo de respuesta diferente (1, 2 y 3
segundos). Luego, crea una función que ejecute estas tres consultas en paralelousando Promise.all, de modo que se esperen los tres resultados antes de
continuar.
Esta técnica te permitirá comprender cómo hacer más eficientes las operaciones
asíncronas independientes ejecutándolas en paralelo*/

function consulta1() {
    return new Promise((resolve) =>{
        setTimeout(() => resolve('Consulta 1 completada'), 1000)
    })
}  

function consulta2() {
    return new Promise((resolve) =>{
        setTimeout(() => resolve('Consulta 2 completada'), 2000)
    })
}  

function consulta3() {
    return new Promise((resolve) =>{
        setTimeout(() => resolve('Consulta 3 completada'), 3000)
    })
}  

async function ejecutarConsultas(){
    try{
        const promesa1 = consulta1();
        const promesa2 = consulta2();
        const promesa3 = consulta3();

        const resultado = await Promise.all([promesa1, promesa2, promesa3]);
        console.log(resultado);
    } catch(error){
        console.log('Error en alguna de las consultas', error);
    }
}

ejecutarConsultas()