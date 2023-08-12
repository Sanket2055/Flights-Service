const express = require('express');
const bodyParser = require('body-parser');
const ApiRoutes = require('./routes/index');

const { PORT } = require('./config/serverConfig');
const db = require('./models/index');
const { City, Airport } = require('./models/index');
const sequelize = require("sequelize")
const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());

    //  tells Express to parse the body of requests that have a Content-Type header of application/json. This will convert the body of the request into a JavaScript object that can be accessed in the req.body property of the request object.


    app.use(bodyParser.urlencoded({ extended: true }));
    // tells Express to parse the body of requests that have a Content-Type header of application/x-www-form-urlencoded

    app.use("/api", ApiRoutes);

    app.listen(PORT, async () => {
        console.log('Server is running on port ' + PORT);
        if (process.env.SYNCDB) {
            db.sequelize.sync({ alter: true })
        }
    });
}

setupAndStartServer();

// ORM - Object Relational Mapper - a library that allows us to interact with a relational database using an object-oriented paradigm. This allows us to write JavaScript code to interact with a database instead of SQL queries.
