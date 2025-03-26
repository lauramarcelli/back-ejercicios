// Ejercicio 5: Generador de iniciales 🅰️
// Escribe una función que reciba un nombre completo y devuelva las
// iniciales en mayúsculas.
// Consigna:
// • Usa el método split() para dividir el nombre.
// • Usa un bucle for y métodos de string


function generarIniciales(fullName) {
    let  words = fullName.split(" ");// varible que separa el nombre en palabras
    let initials = ""// variable que almacena las iniciales

    for (let word of words) {// recorremos las palabras
        if (word.length > 0) {// evita los espacios extras
            initials += word[0].toUpperCase()// toma la primera letra, de "word" que recorre en "fullname" y la pone en mayúscula, y la almacena en "initials"
    }

    }
    return initials
}

console.log(generarIniciales("laura sabrina marcelli"));
