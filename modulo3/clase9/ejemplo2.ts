//2. Intervalo con condicion de parado
// este este intervalo se detendra cuando el contador llegue a 5

export let contador = 0

const intervalo = setInterval(() =>{
    contador ++
    console.log(`Contador con condición: ${contador}`)

    if(contador === 5){
        clearInterval(intervalo)//cancela el intervalo cuando el contador llega  a 5
        console.log('Intervalo con condicion detenido al llegar a 5');
    }
}, 1000)

//Este segundo intervalo se detendra cuando el contador llegue a 5. Despues se detiene automáticamente

//Interfaz gráfica
//Actualizacion de una interfaz gráfica. SetInterval() también puede ser utila para actualizar una interfaz gráfica de usuario de forma periodica. por ejemplo, un reloj que se actualzia cada segunda

function actualizarReloj(){
    //creamos una nueva instancia de date para obtener fecha y hora actuales
    const ahora = new Date()

    //obtenemos la hora actual (de 0 a 23) de la instancia de date
    const horas = ahora.getHours()

    //obtenemos los minutos actuales (de 0 a 59) de la instancia de date
    const minutos = ahora.getMinutes()

    //ontenemos los segundos actuales (de 0 a 59) de la instancia de date
    const segundos = ahora.getSeconds()
    
    //mostramos la la hora actual en formato"hs:mins:secs"
    console.log(`${horas}:${minutos}:${segundos}`)
}

//se crea ahora un intervalo que llama a la funcion actualizarReloj() cada segundo
let relojIntervalo = setInterval(actualizarReloj, 1000)

//Importante: este intervalo se ejecutará indefeinidamente hasta que se detenga manualmente o coloque clearInterval


//SETTIMEOUT()

//1. Ejecucion simple, sin cancelacion

setTimeout(() => {
    console.log('Esto se ejecutará despues de 2 segundos'); 
}, 2000)

//2. Ejecucion con cancelacion

let temporizador = setTimeout(() =>{
    console.log('Este mensaje no se mostrara porque ');
}, 3000)

clearTimeout(temporizador) //cancelamos el temporizador antes de los 3 segundos. Por lo tanto este codigo no se ejecutara 