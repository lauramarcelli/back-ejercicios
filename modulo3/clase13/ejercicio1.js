/*Ejercicio 1: Consultar Información de una API Pública
Descripción:
1. Crea un archivo index.js.
2. Usando el método fetch en Node.js, realiza una solicitud a la API de Rick
and Morty.
3. Extrae el nombre del primer personaje de la respuesta y muéstralo en la
consola.
Pistas:
• Usa fetch(url) para hacer la solicitud y .then(response => response.json())
para procesar el JSON.
• Accede a results[0].name para obtener el nombre del primer personaje*/

async function fetchCharacter(id){
    try{
        const response = await fetch( `https://rickandmortyapi.com/api/character`)

        const character = await response.json()
        const characterName = character.results[id].name

        console.log('Personaje obtenido:', characterName);
        
    } catch (error) {
        console.error('Error al obtener el personaje: ', error.message);
        
    }
}

fetchCharacter(15)
fetchCharacter(2)

/*Ejercicio 2: Obtener Información de un Pokémon Específico
Descripción:
1. Crea un archivo getPokemon.js.
2. Usando fetch, realiza una solicitud a la API de PokeAPI para obtener
información sobre el Pokémon "Bulbasaur".
3. Extrae el nombre y los tipos de Bulbasaur y muestra estos datos en la
consola.
Pistas:
• La URL para Bulbasaur es https://pokeapi.co/api/v2/pokemon/1.
• Los tipos de Pokémon se encuentran en types dentro de la respuesta*/

async function fetchPokemon(){
    try{
        const response = await fetch( `https://pokeapi.co/api/v2/pokemon/1`)

        const pokemon = await response.json()
        const pokeName = pokemon.name
        const pokemonType = pokemon.types[0].type.name
        
        console.log(`El pokemon es ${pokeName} y su tipo es ${pokemonType}`);

    } catch (error) {
        console.log('Error al obtener el personaje: ', error.message);
        
    }
}

fetchPokemon()