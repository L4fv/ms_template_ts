import { Router } from "express";
import VehiclesCtrl from "../controllers/VehiclesCtrl";
import {
  VehicleValidator,
  vehicleSchema,
} from "../validators/vehicleValidator";

class VehicleRoutes {
  router = Router();
  vehiclesCtrl = new VehiclesCtrl();
  vehicleValidator = new VehicleValidator();

  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route("/").get(this.vehiclesCtrl.getAllCourses);
    this.router.route("/").post(
      this.vehicleValidator.validateBody(vehicleSchema),

      this.vehiclesCtrl.postVehicles
    );
    this.router.route("/:id").get(this.vehiclesCtrl.getVehiclesById);
    this.router.route("/:id").put(this.vehiclesCtrl.updateVehiclesById);
  }
}
export default new VehicleRoutes().router;
