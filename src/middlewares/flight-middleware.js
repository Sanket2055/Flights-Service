const { ClientErrors } = require("../utils/error_codes")
const validateCreateFlight = (req, res, next) => {
    if (
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.departureTime ||
        !req.body.arrivalTime ||
        !req.body.price
    ) {
        return res.status(ClientErrors.BAD_REQUEST).json({
            data: {},
            message: 'Flight number is required',
            success: false,
            err: "Missing required fields"
        })
    }

    next();
}

module.exports = {
    validateCreateFlight
}