//1. Funcion básica
function sumar(a: number, b: number): number {
    return a + b;
}

console.log(sumar(1, 2));

//2. Funcion que muestra una funcion sin retorno

function mostrarMensaje(mensaje: string): void {
    console.log(mensaje);
}
console.log(mostrarMensaje("hola"));



//3. Funcion con parametro opcional
function saludar(nombre: string, saludo?: string): string {
    if (saludo){
        return `${saludo}, ${nombre}`
    }
    return `Hola, ${nombre}`
}

console.log(saludar("Laura"));

