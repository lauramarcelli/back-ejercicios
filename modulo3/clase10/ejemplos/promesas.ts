// cremaos una promesa
const miPromesa = new Promise((resolve, reject) => {
    console.log("Estado: Pendig. La operación ha comenzado... ");

    //simulamos una operacion asincrona
    setTimeout(() =>{
        //genera un valor booleano aleatorio: true = exito/ false = fracaso
        const exito = Math.random() > 0.5;

        if(exito){
            resolve("Operación exitosa");
        } else {
            reject("Operación fracasada");
        }
    }, 2000)
})

// Manejo de la promesa
miPromesa
    .then((resultado)=>{
        console.log("Exito", resultado);
    })
    .catch((error) =>{
        console.log("Error", error);
    })
    .finally(() => {
        console.log("Promesa finalizada")
    })
console.log("promesa creada, esperando el resultado...");
    