export const promesa1 = Promise.reject("Error en promesa 1")
//crea una promesa que se resulve inmediatamente con el valor 3

const promesa2 = new Promise((resolve, reject) => {
    //crea una promesa que se recuelve despues de 100ms
    setTimeout(resolve, 100, "Hola")
})

const promesa3 = new Promise((resolve, reject) => {
    //crea una promesa que se recuelve despues de 500ms
    setTimeout(resolve, 500, "Chicas!")
})

Promise.any([promesa1, promesa2, promesa3])
    .then((resultado)=>{
        console.log("Promesa resuelta: ", resultado);
    })
    .catch((error) =>{
        console.log("Error", error);
        
    })