//Actividad 2: Seguimiento de series de televisión
/* Consigna: ¡Es hora de organizar tus series favoritas! Crea un programa
que permita:
1. Registrar una serie: Se debe registrar una serie con su nombre y
la cantidad de temporadas.
2. Listar las series: Muestra todas las series registradas.
3. Actualizar las temporadas de una serie: Permite actualizar la
cantidad de temporadas de una serie.
Pistas:
• Usa un archivo JSON para almacenar la información de las series.
• Si el archivo no existe, comienza con un arreglo vacío.
• ¿Qué es fs.existsSync()?
• El método fs.existsSync() es parte del módulo fs (file system) en
Node.js. Este método se usa para comprobar si un archivo o
directorio existe en el sistema de archivos de manera sincrónica, loque significa que el código se ejecuta y espera a que la operación se
complete antes de continuar con el siguiente paso.
• Sintaxis: fs.existsSync(path); */

const fs = require('fs');
const filePath = './series.json';

//funcion para leer las series desde el archivo
const readSeries = () =>{
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
    }
    const content = fs.readFileSync(filePath, 'utf8');//leemos el archivo
    return JSON.parse(content);//convertimos el contenido a un arreglo de series
}

//funcion para escribir las series en el archivo
const writeSeries = (series) => {
    fs.writeFileSync(filePath, JSON.stringify(series, null, 2));
}

//funcion para agregar series
const registerSerie = (nameSerie, seasons) => {
    const series = readSeries()
    series.push({id: series.length +1, name: nameSerie, seasons: 
        parseInt(seasons) });// Agregamos la nueva serie
        writeSeries(series);//Guardamos la lista actualizada
        console.log(`Serie agregada: ${nameSerie}, temporadas: ${seasons}`);
    };

    

const saveSeries = (series) =>{
    fs.writeFileSync(filePath, JSON.stringify(series, null, 2));
}


//funcion listar series
const listSeries = () => {
    const series = readSeries()
    console.log('Las series son:')
    series.forEach(serie => {
        console.log(`${serie.id}, ${serie.name}, ${serie.season} temporadas`)
    })
}


//funcion para actualizar temporadas
const updateSeason = (idSerie, newSeasons) =>{
    const series = readSeries() // leemos las series
    const serie = series.find(s => s.id === idSerie) //Buscamos la serie por su id
    if (serie) {
        serie.season = parseInt(newSeasons) //Actualizamos las temporadas
        writeSeries(series); // Guardamos la lista actualizada
        console.log(`Serie actualizada: ${serie.name}, nuevas temporadas: ${serie.season}`)
    } else {
        console.log('Serie no encontrada')
    }
}

updateSeason (2, 15)
listSeries()
/* registerSerie("Friends", 10)
registerSerie("Outlander", 7) */