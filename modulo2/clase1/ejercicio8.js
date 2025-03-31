// Ejercicio 8: Contador de letras
// Crea una función que reciba una cadena de texto y una letra, y devuelva
// cuántas veces aparece esa letra en la cadena.
// Consigna:
// • Usa un bucle for y condicionales.
// • Haz que la búsqueda no distinga entre mayúsculas y minúsculas.

let texto = "Programar es Divertido"

function contarLetras(texto, letra) {
    let contador = 0
    texto = texto.toLowerCase();//pasamos a minuscula el texto
    letra = letra.toLowerCase();//pasamos a minuscula la letra parametro

    for (let l of texto){
        
        if (l === letra) {
            contador ++ 
        }
    }
    return contador;
}

console.log(contarLetras(texto, "a"));
