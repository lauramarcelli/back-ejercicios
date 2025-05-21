//definimos una funcion asincrona que recibe un parametro id
async function fetchCharacter(id){
    try{
        //validamos el id
        if(!id) throw new Error ('No ingresaste el ID')
            
        //solicitud a la api de stars wars    
        const response = await fetch( `https://rickandmortyapi.com/api/character/${id}`)
        
        //verificamos si la respuesta no fue exitosa
        if(!response.ok) throw new Error ('No se pudo obtener el personaje', `${response.status}`)

        //obtenemos el personaje
        const character = await response.json()
        
        //imprimimos los datos del personaje
        console.log('Personaje obtenido:', character);
    } catch (error) {
        console.error('Error al obtener el personaje:', error.message);
    }

}

fetchCharacter(1)

