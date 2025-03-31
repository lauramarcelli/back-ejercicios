const fs = require('fs')

//funcion para leer el archivo de contactos

function readContacts () {
    if (fs.existsSync('./contacts.json')) {
        const data = fs.readFileSync('contacts.json', 'utf-8')
        return JSON.parse(data)
    }
    return [] //si no existe el archivo devolvemos una lista vacía
}

//funcion para guardar contacto en el archivo

function saveContacts (contacts) {
    fs.writeFileSync('./contacts.json', JSON.stringify(contacts, null, 2))
} 

//funcion para agregar contactos
function addContact (name, telephone, email) {
    const contact = readContacts()

    //verificamos si existe contacto con ese nombre

    if (contact.some(contact => contact.name === name)) {console.log(`El contacto "${name}" ya existe`);
    }

    contact.push ({name, telephone, email})
    saveContacts(contact)
    console.log(`El contacto "${name}" fue agregado exitosamente.`);
}

//Listar todos los contactos
function listContacts () {
    const contacts = readContacts()
    console.log("Lista de contactos: 📇");
    console.table(contacts);
}


//Buscar un contacto
function searchContact(name) {
    const contacts = readContacts();
    const contact = contacts.find (c => c.name === name);


    if (contact) {
        console.log("contacto encontrado: ", contact)
    } else {
        console.log(`Contacto "${name} no encontrado`)
    }
}

//Pruenas
addContact("Ana", "123-456-789", "ana@mail.com");
addContact("Juan", "987-654-321", "juan@mail.com");
listContacts();
searchContact("Ana");