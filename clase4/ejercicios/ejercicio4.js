/* Ejercicio 4: ¿Existe tu perfil?
Consigna:
Antes de hacer cualquier cosa, asegúrate de que tu archivo perfil.json
existe. Si no existe, crea uno nuevo con un perfil básico.Pista: Usa fs.existsSync para verificar la existencia del archivo */

const fs = require('fs');

//chequeo de perfil
    if (fs.existsSync('./perfil.json')){
        console.log("El perfil existe 🎉")
    } else{
    const profile2 = {
        nombre: "Sofía",
        edad: 4,
        ciudadFavorita:"Buenos Aires"
    }
    fs.writeFileSync('./perfil.json', JSON.stringify(profile2, null, 2), (err) => {
        if (err) {
            console.error("No se ha podido crear tu perfil. Intentan nuevamente")
        } else{
            console.log("Perfil creado exitosamente 🥰")
        }
    });
}


