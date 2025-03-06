/* Ejercicio 6: Tu lista de metas
Consigna:
Es momento de planear tus metas. Crea un archivo llamado metas.json
con una lista vacía al principio. Luego, agrega metas como: “Aprender
Node.js” y “Viajar a Japón”. Guarda la lista actualizada en el archivo.
Pista: Usa fs.writeFile para crear el archivo y agregar elementos a la
lista */

const fs = require('fs')
const filePath ='./goals.json';

//funcion para leer y crear archvo inicial
const readGoals = () => {
    if(!fs.existsSync(filePath)) {//creamos el arreglo vacio
        fs.writeFileSync(filePath, '[]')
    }
    const content = fs.readFileSync(filePath, 'utf8');//leemos el archivo
    return JSON.parse(content)//convertimos el contenido en un arreglo
}
//funcion para escribir las metas en el archivo
const writeGoals = (goals) => {
    fs.writeFileSync(filePath, JSON.stringify(goals, null, 2))
}

//funcion para agregar metas
const addGoals = () => {
    const goals = readGoals()
    goals.push("Aprender Node.js");
    goals.push("Viajar a Japón");//agregamos la meta
    writeGoals(goals)//Guardamos la lista actualizada
    console.log("Meta agregada")
}

//Prueba
addGoals()
