import { Request, Response, NextFunction } from "express";
import * as winston from "winston";
export function successResWithData(res, data, msg) {
  var resData = {
    status: true,
    message: msg ? msg : "success",
    data: data,
  };
  return res.status(200).json(resData);
}

export function ErrorResponse(
  err: any,
  req: Request,
  res: Response,
  message: string,
  httpCode: number
) {
  var data = {
    status: false,
    message: message,
  };

  const _httpCode = httpCode ? httpCode : 500;

  const _error = JSON.stringify(err);
  const error: object = { Message: message, Request: req, Stack: _error };
  winston.error(error);
  return res.status(_httpCode).json(data);
}

export function unCoughtErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  winston.error(JSON.stringify(err));
  res.end({ error: err });
}

export const notFoundResponse = (res, msg) => {
  var data = {
    status: false,
    message: msg,
  };
  return res.status(404).json(data);
};

export const validationErrorWithData = (res, msg, data) => {
  var resData = {
    status: false,
    message: msg,
    data: data,
  };
  return res.status(400).json(resData);
};

export const unauthorizedResponse = (res, msg) => {
  var data = {
    status: false,
    message: msg,
  };
  return res.status(401).json(data);
};
