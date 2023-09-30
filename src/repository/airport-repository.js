const crudRepository = require("./crud-repository");

class AirportRepository extends crudRepository {
    constructor(model) {
        super(model);
    }


}

module.exports = AirportRepository;
