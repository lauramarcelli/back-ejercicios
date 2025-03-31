//Paso 1: Importamos las versiones de uuid que vamos a usar
const {v1: uuidv1, v3: uuidv3, v4: uuidv4, v5: uuidv5} = require ('uuid');  

//Ejemplo 1: UUID V1 - Basado en tiempo. Genera un uuid unico basado en la marca del tiempo y la dirección mac

const idv1 = uuidv1();
console.log('UUID v1 (basado en tiempo):', idv1);

//Ejemplo 2: UUID V3 - Basado en nombre y espacio de nombre. Utiliza un nombre y un espacio de nombre para generar uuids
//usando un hash MDS
const NAMESPACE = uuidv3.URL//Espacio de nombre estandar basado en la url
const namev3 = "ejemploNombre"
const idv3 = uuidv3(namev3, NAMESPACE)
console.log('uuid v3 (Basado en nombre y espacio de nombre)', idv3 )

//Ejemplo 3: UUDI V4 -Aleatorio
//genera un uuid aleatorio utilizado valores generales de manera random
const idv4 = uuidv4()
console.log('uudi v4 (aleatoria)',idv4)

//Ejemplo4: UUDI V5 -Espacio de nombre y nombre (SHA-1)
//Similar a la v3 pero se usa sha-1
const namev5 = "Otro ejemplo"
const idv5 = uuidv5(namev5, NAMESPACE)
console.log("UUID V5 (Basada en nombre y espacio de nombre sha-1)", idv5) 