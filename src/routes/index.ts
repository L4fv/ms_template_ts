import { Application } from "express";

import vehicleRoutes from "./VehicleRoutes";

export default class Routes {
  constructor(app: Application) {
    // course reoutes
    app.use("/api/v1/vehicles", vehicleRoutes);
  }
}
