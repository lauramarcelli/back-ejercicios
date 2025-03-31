// Ejercicio 2: El menú del día 🍽️
// Escribe una función que reciba un objeto con platos y precios, y devuelva
// los platos cuyo precio sea menor a $20.
// Consigna:
// • Usa un bucle for...in.
// • Usa objetos y arrays



function platosBaratos (menu) {
    let carta = []

    for (let item in menu) {
        if (menu[item]  < 20) {
            carta.push(item)
        };
        
    };
    return carta
}

let menu = {
    "ensalada": 15,
    "sopa": 8,
    "carne": 25,
    "pasta": 18
}

console.log(platosBaratos(menu))

