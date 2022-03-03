import * as Joi from "joi";
import { Request, Response, NextFunction } from "express";

interface VehicleRequest extends Request {
  value?: { body?: string };
}
export class VehicleValidator {
  constructor() {}

  validateBody(schema) {
    return async (req: VehicleRequest, res: Response, next: NextFunction) => {
      try {
        const val = await schema.validateAsync(req.body);
        req.value = req.value ?? {};
        req.value.body = req.value.body ?? val;
        next();
      } catch (error) {
        res.status(400).json(error);
      }
    };
  }
}

export const vehicleSchema = Joi.object().keys({
  countyFips: Joi.number().required(),
  countyName: Joi.string().required(),
  stateName: Joi.string().required(),
  date: Joi.string().required(),
  countyVmt: Joi.number().required(),
  baselineJanVmt: Joi.number().required(),
  percentChangeFromJan: Joi.number().required(),
  mean7CountyVmt: Joi.number().required(),
  mean7PercentChangeFromJan: Joi.number().required(),
  dateAtLow: Joi.string().required(),
  mean7CountyVmtAtLow: Joi.number().required(),
  percentChangeFromLow: Joi.number().required(),
});
