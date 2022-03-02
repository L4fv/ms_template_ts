import { Request, Response, NextFunction } from "express";
import VehicleRepo from "../repositories/VehiclesRepo";

import { successResWithData, ErrorResponse } from "../handlers/responseHandler";

export default class VehiclesCtrl {
  constructor() {}

  async getAllCourses(req: Request, res: Response, next: NextFunction) {
    try {
      const options = {};
      const result = await VehicleRepo.getAllCourses(options);
      return successResWithData(res, result, "sucess");
    } catch (error) {
      ErrorResponse(error, req, res, "Fetch All Vehicles failed.");
    }
  }

  async postVehicles(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await VehicleRepo.postVehicles(req.body);
      return successResWithData(res, result, "sucess");
    } catch (error) {
      ErrorResponse(error, req, res, "Post Vehicles failed.");
    }
  }

  async getVehiclesById(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await VehicleRepo.getVehiclesById(req.params.id);
      let messages = "sucess";
      if (!result) {
        messages = "not found data";
      }
      return successResWithData(res, result, messages);
    } catch (error) {
      ErrorResponse(error, req, res, "Fetch Vehicles By Id failed.");
    }
  }

  async updateVehiclesById(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await VehicleRepo.updateVehiclesById(
        req.body,
        req.params.id
      );
      return successResWithData(res, {}, "sucess");
    } catch (error) {
      ErrorResponse(error, req, res, "Update Vehicles By Id failed.");
    }
  }
}
