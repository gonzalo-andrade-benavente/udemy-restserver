const cors = require('cors');
const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userRoutes = '/api/users';
        // Middlewares
        this.middlewares();
        // Routes
        this.routes();
    }

    routes() {
        this.app.use(this.userRoutes, require('../routes/user') );
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running in port ${this.port}`);
        });
    }

    middlewares() { 
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

}

module.exports = Server;