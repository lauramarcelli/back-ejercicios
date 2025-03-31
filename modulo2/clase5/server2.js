/*Ejercicio Extra: Contador de Clientes Conectados
Esta parte es un extra de los primero cinco ejercicios, si no pueden
realizarlo no se preocupen, lo importante es que finalicen los primeros
cinco ejercicios (que es uno solo dividido en partes)
Consigna: Modificar el servidor TCP para que cuente cuántos clientes
están conectados al mismo tiempo y muestre este número en la consola.
Esto les permitirá entender cómo manejar múltiples clientes y trabajar
con variables globales.
¡Vamos a hacer nuestro servidor un poco más interesante! En este
ejercicio, modificaremos nuestro servidor para que pueda contar cuántos
clientes están conectados al mismo tiempo.
Objetivos centrales:
• Cada vez que un cliente se conecte, aumentaremos un contador.
• Cuando un cliente se desconecte, disminuiremos ese contador.
• Mostraremos en la consola cuántos clientes están conectados en
ese momento.
Guía paso a paso:
1. Paso 1: Crear una variable para el contador de clientes
o Antes de crear el servidor, declara una variable llamada
clientesConectados e inicialízala en 0.
o Pista: Esta variable será global, ya que debe funcionar para
todos los clientes.
2. Paso 2: Incrementar el contador al conectar un cliente
o En la función que se ejecuta cuando un cliente se conecta,
incrementa la variable clientesConectados.
o Muestra un mensaje en la consola que diga:
"Un cliente se ha conectado. Clientes conectados: X", donde
X es el número actual de clientes conectados.
3. Paso 3: Decrementar el contador al desconectar un cliente
o En el evento end, decrementa el valor de la variable
clientesConectados.
o Muestra un mensaje en la consola que diga:
"Un cliente se ha desconectado. Clientes conectados: X",
donde X es el número actual de clientes conectados.
4. Paso 4: Probar el servidor
o Inicia el servidor y observa cómo el contador cambia a
medida que se conectan y desconectan clientes.
o En este caso, no se preocupen por probarlo con clientes
reales, ya que el próximo paso será aprender a probar estos
servidores.*/

const net = require('net');

let clientsConnected = 0

const server = net.createServer((socket) =>{
    //Contador clientes
    clientsConnected++
    console.log(`Un cliente se ha conectado. Total de clientes en linea: ${clientsConnected}` )

    //Evento de desconexión
    socket.on('end', () =>{
        clientsConnected--
        console.log(`Cliente desconectado. Total de clientes en linea: ${clientsConnected}`)
    })
}
)

const PORT = 5000

server.listen(PORT, () => {
    console.log(`Servidor TCP escuchando en puerto: ${PORT}`)
})