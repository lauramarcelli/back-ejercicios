/*1. Mueblería: Actualización de PreciosEn una mueblería, se requiere un sistema que permita actualizar los precios de
los muebles cada vez que cambien. Cada mueble tiene un nombre, un precio y
un identificador único. Implementa las siguientes funciones:
• Añadir un nuevo mueble.
• Actualizar el precio de un mueble después de 3 segundos utilizando
setTimeout().
• Mostrar el inventario de muebles*/ 


// class Mueble{
//     id: number;
//     price: number;
//     name: string;

//     constructor(id: number, price: number, name: string){
//         this.id = id;
//         this.price = price;
//         this.name = name
//     }

//     cambiarPrecio(value: number) {
//         this.price = value;
//         setTimeout(() => {
//             console.log(`El precio del mueble ${this.name} ha sido actualizado a ${this.price}`);
//         }, 3000)
//     }
    

// }
// class Inventario{
//     muebles: Mueble[] = []
//     constructor(){
//         this.muebles = []
//     }

//     anadirMueble(mueble: Mueble): void{
//         this.muebles.push(mueble)
//     }

//     get inventario(): any{
//         return this.muebles
//     }
// }

// const muebles = new Inventario()

// const sillon = new Mueble( 1, 50000,'siilon',)
// const mesa = new Mueble(  2, 20000, 'mesa')
// muebles.anadirMueble(sillon)
// muebles.anadirMueble(mesa)
// console.log(muebles.inventario);
// sillon.cambiarPrecio(60000)
// console.log(muebles.inventario);

/*2. Florería: Envío Programado de Pedidos
Crea un sistema que gestione el envío de pedidos de flores. Cada pedido debe
contener el nombre del cliente, la cantidad de flores y el tipo de flores.
Implementa las siguientes funciones:
• Añadir un pedido.
• Programar el envío de un pedido utilizando setTimeout() para simular un
retraso de 5 segundos.
• Mostrar todos los pedidos pendientes.*/

class Pedidos{
    nombreCliente: string; 
    cantidadFlor: number;
    tipoFlor: string;
    constructor(nombreCliente: string, cantidadFlor: number, tipoFlor: string){
        this.nombreCliente = nombreCliente;
        this.cantidadFlor = cantidadFlor;
        this.tipoFlor = tipoFlor;
    }

    programarEnvio(): void{
        setTimeout(()=>{
            console.log(`El envio de ${this.cantidadFlor} ${this.tipoFlor} ha sido programado para ${this.nombreCliente}`);
        }, 3000)
    }
}

class RappiFlores{
    pedidos: Pedidos[] = []
    constructor(){
        this.pedidos = []
    }

    anadirPedido(pedido: Pedidos): void{
        this.pedidos.push(pedido)
    }

    mostrarPedidos(): void{
        this.pedidos.forEach(pedido => {
            console.log(`cliente: ${pedido.nombreCliente}, cantidad de flores: ${pedido.cantidadFlor}, tipo de flores: ${pedido.tipoFlor}`);
            
        })
    }
}

const pedido1 = new Pedidos('Luis', 10, 'rosas')
const pedido2 = new Pedidos('Maria', 5, 'tulipanes')
const pedidosTodos = new RappiFlores()
pedidosTodos.anadirPedido(pedido1)
pedidosTodos.anadirPedido(pedido2)
console.log(pedidosTodos.pedidos);
console.log(pedidosTodos.mostrarPedidos());

