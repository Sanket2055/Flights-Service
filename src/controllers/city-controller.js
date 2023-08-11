const { CityService } = require('../services/index');

const cityService = new CityService();
/**
 * POST
 * data ===> req.body
 * */
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "City created successfully",
            err: {}
        });
    } catch (error) {
        // do not throw error 
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create city",
            err: error
        });
    }
}
// DELETE /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully deleted city",
            err: {}
        });
    } catch (error) {
        // do not throw error 
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete city",
            err: error
        });
    }
}
// GET /city/:id
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully fetched city",
            err: {}
        });
    } catch (error) {
        // do not throw error 
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch city",
            err: error
        });
    }
}
// patch /city/:id
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully updated city",
            err: {}
        });
    } catch (error) {
        // do not throw error 
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update city",
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {

        const cities = await cityService.getAllCities();
        return res.status(200).json({
            data: cities,
            success: true,
            message: "successfully fetched cities",
            err: {}
        });


    } catch (error) {
        // do not throw error 
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "failed to fetch cities",
            err: error
        });
    }
}


module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}