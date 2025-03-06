/*Tienes un parque de diversiones que permite la entrada a personas
mayores de 12 años y menores de 60. Escribe una función que reciba una
lista de edades y devuelva cuántas personas pueden entrar al parque.
Consigna:
• Usa un bucle for y condicionales.
• Usa un array como entrada de la función.
• Devuelve el número de personas que cumplen con los requisitos.*/



function contarPersonasAdmisibles(edades) {
    
    let contador = 0;
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] > 12 && edades[i] < 60) { // Verifica si la edad está en el rango permitido
            contador++;
        }
    }
    return contador;
}
// Ejemplo de uso
const listaEdades = [10, 15, 35, 65, 12, 59];
const resultado = contarPersonasAdmisibles(listaEdades);
console.log(`El número de personas que pueden entrar al parque es: ${resultado}`);

