const path = require ('path')

//Ejemplo 1: Uniendo segmentos de rutas simples
//Unimos tres segmentos de ruta:
const ejemplo1  = path.join('./user', 'local', 'bin')
console.log('Ejemplo1 - ruta combinada: ', ejemplo1)

//Ejemplo 2:  eliminar barras redundantes
const ejemplo2  = path.join('./user', '/local/', '/bin/')
console.log('Ejemplo2 - rutas normalizadas sin barras redundante: ', ejemplo2)

//Ejemplo 3: Normalzamos rutas '..' (subir directorio)
//Este ejemplo muestra como path.join maneja el segmento '..' que indica 'subir directorio'
//'/user' + 'local' sube un nivel con '..' y llega a resultado: \user\bin
const ejemplo3  = path.join('./user', 'local', '..', 'bin')
console.log('Ejemplo3 - rutas normalizadas con ".." : ', ejemplo3)


//Ejemplo 4: Construccion ruta relativa multiplataforma
//Creamos una ruta relativa que funcione en cualquier sistema operativo
//En UNIX el resultado sera con la barra: /
//En windows el resultado tendra las barras: \
//path.join garantiza que se usen las barras segun el sistema operativo vigente 
const ejemplo4  = path.join('docs', 'projects', 'index.html', 'bin')
console.log('Ejemplo4 - rutas relativa:', ejemplo4)