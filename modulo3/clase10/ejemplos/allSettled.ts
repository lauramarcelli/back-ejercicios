//////promise.allSettled

const promesa4 = Promise.reject("Error en promesa 4")

const promesa5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Hola")
})

const promesa6 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Chicas con promise.allSettled")
})

Promise.allSettled([promesa4, promesa5, promesa6])
    .then((resultados)=>{
        console.log("Resultado de todas las promesas ", resultados);
    })