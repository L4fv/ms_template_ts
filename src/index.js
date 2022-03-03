"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const winston = require("winston");
const responseHandler_1 = require("./handlers/responseHandler");
const routes_1 = require("./routes");
// app.enable('trust proxy'); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
class Server {
    constructor(app) {
        this.config(app);
        new routes_1.default(app);
    }
    config(app) {
        app.use(morgan("combined"));
        app.use((0, express_1.urlencoded)({ extended: true }));
        app.use((0, express_1.json)());
        app.use(helmet());
        app.use(responseHandler_1.unCoughtErrorHandler);
    }
}
exports.default = Server;
process.on("beforeExit", function (err) {
    winston.error(JSON.stringify(err));
    console.error(err);
});
//# sourceMappingURL=index.js.map