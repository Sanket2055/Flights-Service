const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require("../utils/helper")
class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data) {
        try {
            if (compareTime(data.arrivalTime, data.departureTime)) {
                throw new Error("Arrival cannot be before departure");
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({ ...data, totalSeats: airplane.capacity });
            return flight;
        } catch (error) {
            console.log("something went wrong in flight service", error);
            throw error;
        }
    }

    async getAllFlightData(data) {
        try {
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("something went wrong in flight service", error);
            throw error;
        }
    }
}
/*
        flightNumber,
        airplaneId,
        departureAirportId,
        arrivalAirportId,
        arrivalTime,
        departureTime,
        price,
        totalSeats -> airplaneId
*/

module.exports = FlightService;