"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VehiclesCtrl_1 = require("../controllers/VehiclesCtrl");
class VehicleRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.vehiclesCtrl = new VehiclesCtrl_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route("/").get(this.vehiclesCtrl.getAllCourses);
        this.router.route("/").post(this.vehiclesCtrl.postVehicles);
        this.router.route("/:id").get(this.vehiclesCtrl.getVehiclesById);
        this.router.route("/:id").put(this.vehiclesCtrl.updateVehiclesById);
    }
}
exports.default = new VehicleRoutes().router;
//# sourceMappingURL=VehicleRoutes.js.map