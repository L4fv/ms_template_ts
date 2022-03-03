"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unauthorizedResponse = exports.validationErrorWithData = exports.notFoundResponse = exports.unCoughtErrorHandler = exports.ErrorResponse = exports.successResWithData = void 0;
const winston = require("winston");
const successResWithData = (res, data, msg) => {
    var resData = {
        status: true,
        message: msg ? msg : "success",
        data: data,
    };
    return res.status(200).json(resData);
};
exports.successResWithData = successResWithData;
function ErrorResponse(err, req, res, message) {
    var data = {
        status: false,
        message: err.message,
    };
    const httpCode = err["httpCode"] ? err["httpCode"] : 500;
    const error = { Message: message, Request: req, Stack: err };
    winston.error(JSON.stringify(error));
    return res.status(httpCode).json(data);
}
exports.ErrorResponse = ErrorResponse;
function unCoughtErrorHandler(err, req, res, next) {
    winston.error(JSON.stringify(err));
    res.end({ error: err });
}
exports.unCoughtErrorHandler = unCoughtErrorHandler;
const notFoundResponse = (res, msg) => {
    var data = {
        status: false,
        message: msg,
    };
    return res.status(404).json(data);
};
exports.notFoundResponse = notFoundResponse;
const validationErrorWithData = (res, msg, data) => {
    var resData = {
        status: false,
        message: msg,
        data: data,
    };
    return res.status(400).json(resData);
};
exports.validationErrorWithData = validationErrorWithData;
const unauthorizedResponse = (res, msg) => {
    var data = {
        status: false,
        message: msg,
    };
    return res.status(401).json(data);
};
exports.unauthorizedResponse = unauthorizedResponse;
//# sourceMappingURL=responseHandler.js.map