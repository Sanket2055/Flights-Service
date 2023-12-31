const { City } = require('../models/index');
const { Op } = require("sequelize");
class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        }
        catch (error) {
            console.log("something went wrong in repository", error);
            throw { error };
        }

    }

    async deleteCity(id) {
        try {

            await City.destroy({ where: { id } });
            return true;
        }
        catch (error) {
            console.log("something went wrong in repository", error);
            throw { error };
        }
    }

    async updateCity(id, data) {
        // data = { name: "new name" }
        try {
            // ! approach 1 : does not return updated data
            // const city = await City.update(data, {
            //     where: { id },
            // });
            // return city;
            // ! approach 2 : returns updated data
            const city = await City.findOne({ where: { id } });
            city.name = data.name;
            await city.save();
            return city;

        }
        catch (error) {
            console.log("something went wrong in repository", error);
            throw { error };
        }
    }

    async getCity(id) {
        try {
            const city = await City.findOne({ where: { id } });
            return city;
        }
        catch (error) {
            console.log("something went wrong in repository", error);
            throw { error };
        }
    }

    async getAllCities(filter) { // filter can be empty also
        try {

            if (filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                })
                return cities;
            }

            const cities = await City.findAll();
            return cities;
        }
        catch (error) {
            console.log("something went wrong in repository", error);
            throw { error };
        }
    }

}

module.exports = CityRepository;