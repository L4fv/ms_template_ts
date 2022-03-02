import { IntegerDataType } from "sequelize/types";
import { Vehicles } from "../models/Vehicles";
class VehicleRepo {
  constructor() {}

  getAllCourses(options) {
    console.log("ere", options);
    return Vehicles.findAll(options);
  }

  getVehiclesById(id) {
    return Vehicles.findOne({
      where: { id },
    });
  }

  updateVehiclesById(body: any, id) {
    return Vehicles.update(body, {
      where: { id },
    });
  }

  postVehicles(body: any) {
    return Vehicles.create(body);
  }
}

export default new VehicleRepo();
