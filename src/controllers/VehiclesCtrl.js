"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const VehiclesRepo_1 = require("../repositories/VehiclesRepo");
const responseHandler_1 = require("../handlers/responseHandler");
class VehiclesCtrl {
    constructor() { }
    getAllCourses(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const options = {};
                const result = yield VehiclesRepo_1.default.getAllCourses(options);
                return (0, responseHandler_1.successResWithData)(res, result, "sucess");
            }
            catch (error) {
                (0, responseHandler_1.ErrorResponse)(error, req, res, "Fetch All Vehicles failed.");
            }
        });
    }
    postVehicles(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield VehiclesRepo_1.default.postVehicles(req.body);
                return (0, responseHandler_1.successResWithData)(res, result, "sucess");
            }
            catch (error) {
                (0, responseHandler_1.ErrorResponse)(error, req, res, "Post Vehicles failed.");
            }
        });
    }
    getVehiclesById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield VehiclesRepo_1.default.getVehiclesById(req.params.id);
                let messages = "sucess";
                if (!result) {
                    messages = "not found data";
                }
                return (0, responseHandler_1.successResWithData)(res, result, messages);
            }
            catch (error) {
                (0, responseHandler_1.ErrorResponse)(error, req, res, "Fetch Vehicles By Id failed.");
            }
        });
    }
    updateVehiclesById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield VehiclesRepo_1.default.updateVehiclesById(req.body, req.params.id);
                return (0, responseHandler_1.successResWithData)(res, {}, "sucess");
            }
            catch (error) {
                (0, responseHandler_1.ErrorResponse)(error, req, res, "Update Vehicles By Id failed.");
            }
        });
    }
}
exports.default = VehiclesCtrl;
//# sourceMappingURL=VehiclesCtrl.js.map