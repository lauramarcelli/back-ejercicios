/*Actividad 1: Usar For...In para recorrer propiedades de un objeto
Crea un objeto con al menos 3 propiedades (nombre, edad, ciudad) y usa un
bucle for...in para recorrer y mostrar cada propiedad y su valor.*/

const persona = {
    nombre: 'Lucia',
    edad: 20,
    ciudad: 'Bariloche'
}

//keyof typeof persona le dice a TypeScript: “quiero tratar propiedad como una de las claves reales del objeto persona”. Esto permite acceder al valor con seguridad de tipo.

for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad as keyof typeof persona]}`);
}

/*Actividad 2: Usar For...Of para recorrer los valores de un arreglo
Crea un arreglo con al menos 5 números y usa un bucle for...of para imprimir
cada número en consola.*/

const numeros = [1, 2, 3, 4, 5];

for(const numero of numeros) {
    console.log(numero);
}

//Actividad 4: Usar aserciones de tipo
// Declara una variable de tipo any y usa una aserción para tratarla como string,
// accediendo a la propiedad .length

let variable :  any = "Lucía"
let alumnaEscuela : number = (variable as string).length
console.log(`${alumnaEscuela}, es el largo de la variable`);

/*Actividad 5: Usar aserciones dobles
Crea una variable de tipo any y haz una conversión con aserciones dobles para
convertirla en un number. Muestra el resultado*/

let variable2: any = "1984"
let georgeOrwell :  number = (variable2 as unknown as number)

console.log(georgeOrwell);

/*Actividad 6: Filtrar elementos de un arreglo genérico usando For...Of y
Aserciones
Crea una función genérica llamada filtrarElementos que reciba un arreglo de
valores mixtos (por ejemplo, number | string | boolean). Usando un bucle for...of,
filtra solo los valores que sean cadenas de texto (string). Utiliza aserciones de
tipo para acceder a las propiedades específicas de string*/

function filtrarElementos<T>(array: T[]): string[] {
    const results : string[] = []
    for(const element of array){
        if(typeof element === 'string'){
            results.push((element as string))
        }
    }
    return results
}

console.log(filtrarElementos([1, 2, 3, 'a', 'b', 'Carlos', true, false]));

