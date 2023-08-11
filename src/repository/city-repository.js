const { City } = require('../models/index');

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

    async deleteCity({ id }) {
        try {
            await City.destroy({ where: { id } });
            return true;
        }
        catch (error) {
            console.log("something went wrong in repository", error);
            throw { error };
        }
    }

    async updateCity({ cityId, data }) {
        try {
            const city = await City.update(data, { where: { cityId } });
            return city;
        }
        catch (error) {
            console.log("something went wrong in repository", error);
            throw { error };
        }
    }

    async getCity({ id }) {
        try {
            const city = await City.findOne({ where: { id } });
            return city;
        }
        catch (error) {
            console.log("something went wrong in repository", error);
            throw { error };
        }
    }

}

module.exports = CityRepository;