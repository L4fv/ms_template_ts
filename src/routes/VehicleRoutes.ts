import { Router } from "express";
import VehiclesCtrl from "../controllers/VehiclesCtrl";

class VehicleRoutes {
  router = Router();
  vehiclesCtrl = new VehiclesCtrl();

  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route("/").get(this.vehiclesCtrl.getAllCourses);
    this.router.route("/").post(this.vehiclesCtrl.postVehicles);
    this.router.route("/:id").get(this.vehiclesCtrl.getVehiclesById);
    this.router.route("/:id").put(this.vehiclesCtrl.updateVehiclesById);
  }
}
export default new VehicleRoutes().router;
