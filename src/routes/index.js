"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VehicleRoutes_1 = require("./VehicleRoutes");
class Routes {
    constructor(app) {
        // course reoutes
        app.use("/api/v1/vehicles", VehicleRoutes_1.default);
    }
}
exports.default = Routes;
//# sourceMappingURL=index.js.map