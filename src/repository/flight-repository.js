const { Flights } = require('../models/index');
const { Op } = require('sequelize');
class FlightRepository {

    #createFilter(data) {
        let filter = {};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        // if (data.minPrice & data.maxPrice) {
        //     Object.assign(filter, {
        //         [Op.and]: [
        //             { price: { [Op.gte]: data.minPrice } },
        //             { price: { [Op.lte]: data.maxPrice } }
        //         ]
        //     })
        // }
        // if (data.minPrice) {
        //     Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
        // }
        // if (data.maxPrice) {
        //     Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
        // }

        price_filter = [];
        if (data.minPrice) {
            price_filter.push({ price: { [Op.gte]: data.minPrice } })
        }
        if (data.maxPrice) {
            price_filter.push({ price: { [Op.lte]: data.maxPrice } })
        }
        Object.assign(filter, { [Op.and]: price_filter })

        return filter;

    }

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("something went wrong in flight repository", error);
            throw error;
        }
    }

    async getFlights(flightId) {
        try {
            const flights = await Flights.findByPk({ where: { flightId } });
            return flights;
        } catch (error) {
            console.log("something went wrong in flight repository", error);
            throw error;
        }
    }


    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter)
            const flights = await Flights.findAll({
                where: filterObject
            });
            return flights;
        } catch (error) {
            console.log("something went wrong in flight repository", error);
            throw error;
        }
    }
}

module.exports = FlightRepository;

/*

where :{
    arrivalAirportId : 2,
    departureAirportId : 4,
    price : {
        [Op.gte] : 500
    }
}


*/