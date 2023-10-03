```
Flights and Search Service/
├─ src/
│  ├─ index.js
│  ├─ models/
│  ├─ controllers/
│  ├─ middlewares/
│  ├─ services/
│  ├─ utils/
│  ├─ config/
│  ├─ repository/

├─ .gitignore
├─ package.json
├─ README.md
├─ tests/ [later]
├─ static/ [files]
```

```
note:
    repository: data access layer
    services: business logic
    controllers: routes
    models: database models
    middlewares: express middlewares
    utils: helper functions
    config: configuration files
```

### steps to run:

1. `npm install` on root folder
2. create a `.env` file on root folder
   2-1. add `PORT=3000` to `.env` file 3. inside `src/config` create a new file named config.json and add the below code :

```
{
    "development":
    {
    "username": "<DB login name>",
    "password": "<your password>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
    }
}

```

after adding config.json file, run `npx sequelize-cli db:create` to create the database
run `npx sequelize-cli db:migrate` to create the tables

### DB design

    -Airplane Table
    -Flight Table
    -AirPort Table
    -City Table

note: migrations help us to do incremental changes to the database

2. sequelize gives us two level constraints
   2-1. model level constraints
   2-2. database level constraints
   no need to call database when model level constraints are violated

Other services:
<!-- links of servicess -->
<!-- https://github.com/Sanket2055/Auth_Service -->
<!-- https://github.com/Sanket2055/ReminderService -->
<!-- https://github.com/Sanket2055/AirTicketBookingService -->

1. [Auth Service](https://github.com/Sanket2055/Auth_Service)

2. [Reminder Service](https://github.com/Sanket2055/ReminderService)

3. [Booking Service](https://github.com/Sanket2055/AirTicketBookingService)


### API GATEWAY
<!-- https://github.com/Sanket2055/API_Gateway -->

1. [API Gateway](https://github.com/Sanket2055/API_Gateway)
