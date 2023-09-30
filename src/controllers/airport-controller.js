const { AirportService } = require('../services/index');
const airportService = new AirportService();
const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body);
        res.status(201).json({
            data: response,
            message: "Successful ly airport created",
            success: true,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "cannot create airport",
            success: false,
            err: error
        })
    }
}

module.exports = {
    create
}
