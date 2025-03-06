/* Ejercicio 3: ¡Actualiza tu estilo!
Consigna:
¿Has cambiado tu estilo o actividad reciente? ¡Es momento de actualizar
tu perfil! Agrega un nuevo atributo hobby a tu perfil y guarda los cambios
en el archivo perfil.json.
Pista: Primero, lee el archivo existente, actualiza el objeto y vuelve a
escribirlo */

const fs = require('fs');

fs.readFile('./perfil.json', 'utf-8', (err, data) => {
    if (err) {
        console.error("No se pudo leer el archivo actualizado:", err);
    } else {
        //convertimos el contenido en un objeto
        const profile = JSON.parse(data)

        //agregamos un nuevo atributo
        profile.hobby = "Cocinar";

        //Guardamos el objeto actualizado en el archivo
        fs.writeFile('./perfil.json', JSON.stringify(profile, null, 2), (err) => {
            if (err) {
                console.error("No se pudo actualizar tu perfil:", err); 
            } else {
                console.log("¡Perfil actualizado con tu nuevo hobby! 🎨")
            }
        });
    }    
})