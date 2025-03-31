//Paso 1
const fs = require('fs');
const path = require('path');

//Paso 2:
const filePath = path.join(__dirname, '../data/hotel.json')

//Paso 3:
const HotelModel = {
    getHotelById: (id) => {
        const data = fs.readFileSync(filePath)
        const hotels =JSON.parse(data)
        return hotels.find(h => h.id === id) || null
    }
}

module.exports = HotelModel