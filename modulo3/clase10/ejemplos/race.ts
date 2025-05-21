export const promesa1 = new Promise((resolve) => {
    //crea una promesa que se recuelve despues de 100ms
    setTimeout(resolve, 100, "Promesa 1 resuelta")
})

const promesa2 = new Promise((resolve) => {
    //crea una promesa que se recuelve despues de 500ms
    setTimeout(resolve, 500, "Promesa 2 resuelta")
})

Promise.race([promesa1, promesa2])
    .then((resultado)=>{
        console.log("Resultado de la promesa más rápida : ", resultado);
    })
    .catch((error) =>{
        console.log("Error", error);
        
    })