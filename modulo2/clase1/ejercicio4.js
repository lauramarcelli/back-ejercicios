// Ejercicio 4: Contando vocales 🅰️🅾️
// Crea una función que reciba una cadena de texto y devuelva cuántas
// vocales contiene.
// Consigna:
// • Usa un bucle for y condicionales.
// • Considera vocales mayúsculas y minúsculas (a, e, i, o, u)

let text = "Hello world";

function contarVocales (text) {
    let contador = 0
    let vowels = "aeiouAEIOU"

    for (let character of text) {
        if(vowels.includes(character)) {
            contador++
        }

    }
    return contador;
}

console.log(contarVocales(text));
console.log(contarVocales("aqui estoy yo"))
