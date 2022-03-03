"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vehicles_1 = require("../models/Vehicles");
class VehicleRepo {
    constructor() { }
    getAllCourses(options) {
        console.log("ere", options);
        return Vehicles_1.Vehicles.findAll(options);
    }
    getVehiclesById(id) {
        return Vehicles_1.Vehicles.findOne({
            where: { id },
        });
    }
    updateVehiclesById(body, id) {
        return Vehicles_1.Vehicles.update(body, {
            where: { id },
        });
    }
    postVehicles(body) {
        return Vehicles_1.Vehicles.create(body);
    }
}
exports.default = new VehicleRepo();
//# sourceMappingURL=VehiclesRepo.js.map