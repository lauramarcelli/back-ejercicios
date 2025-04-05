//1.definimos un objeto básico
let auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2022
}

//mostramos las propiedades del objeto en consola
console.log(`Marca: ${auto.marca} --> ${auto.modelo}`);


//2.declaracion explicita de un objeto
let libro : {titulo : string; autor : string; anio : number } ={
    titulo: '100 años de Soledad',
    autor: 'Gabriel García Marquez',
    anio: 1984
}

console.log(`Titulo: ${libro.titulo} --> ${libro.autor}`);


//3.propiedades opcionales

let estudiante: {nombre: string; edad?: number} = {
    nombre: "Berni",
}
console.log(`Nombre: ${estudiante.nombre} --> ${estudiante.edad ?? "Desconocida"}`);


//4.metodos en un objeto
let perro = {
    nombre: "Blaki",
    raza: "Caniche",
    ladrar: function () {
        return `${this.nombre} está ladrando!`
    }
}
console.log(perro.ladrar());
