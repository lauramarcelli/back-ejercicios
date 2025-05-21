//promesas de ejemplos
const promesa1 = Promise.resolve(3)
//crea una promesa que se resulve inmediatamente con el valor 3

const promesa2 = new Promise((resolve, reject) => {
    //crea una promesa que se recuelve despues de 100ms
    setTimeout(resolve, 100, "Hola")
})

const promesa3 = new Promise((resolve, reject) => {
    //crea una promesa que se recuelve despues de 500ms
    setTimeout(resolve, 500, "Chicas!")
})

//usamos el promise.all para esperar a todas las promesas se resuelvan

Promise.all([promesa1, promesa2, promesa3])
    .then((resultados) =>{
        console.log("Resultados de todas las promesas: ", resultados);
    })
    .catch((error) =>{
        console.log('Una promesa fallo', error);
    })



    

