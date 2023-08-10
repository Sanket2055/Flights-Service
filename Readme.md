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

why src folder : - to avoid tests folder to be deployed to production - we will write test outside the src folder - we will gitignore test static and others

```

```
