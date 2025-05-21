//1 . Intervalo indefenido (cancelacion manual)

let contador = 0
const intervalo = setInterval(() =>{
    contador ++ 
    console.log(`Contador de tipo indefinido: ${contador}`)

    //aquí podriamos llamar a clearInterval(intervalo) en algún momento para detener el intervalo. Por ejemplo, podrias tener alguna logica condicional externa o evento que lo detenga, pero en este caso lo dejamos correr indefinidamente

    //corto con CRTL + C 
}, 1000)


