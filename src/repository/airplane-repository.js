const { Airplane } = require('../models/index');

class AirplaneRepository {
    async getAirplane(id) {
        try {
            const airplane = await Airplane.findOne({ where: { id } });
            return airplane;
        } catch (error) {
            console.log("something went wrong in airplane repository", error);
            throw error;
        }
    }
}

module.exports = AirplaneRepository;