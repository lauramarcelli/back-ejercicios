const HotelModel = require ('../model/hotelModel')

const HotelView = require ('../view/hotelView')

const HotelController = {
    handlerRequest: (id) =>{
        const hotel = HotelModel.getHotelById(parseInt(id,10))

        return HotelView.formatResponse(hotel)
    }
}

module.exports = HotelController