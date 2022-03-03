"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicles = void 0;
const db_1 = require("./../db/db");
const sequelize_1 = require("sequelize");
class Vehicles extends sequelize_1.Model {
}
exports.Vehicles = Vehicles;
Vehicles.init({
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    countyFips: { type: sequelize_1.DataTypes.INTEGER },
    countyName: { type: sequelize_1.DataTypes.STRING },
    stateName: { type: sequelize_1.DataTypes.STRING },
    date: { type: sequelize_1.DataTypes.STRING },
    countyVmt: { type: sequelize_1.DataTypes.INTEGER },
    baselineJanVmt: { type: sequelize_1.DataTypes.INTEGER },
    percentChangeFromJan: { type: sequelize_1.DataTypes.INTEGER },
    mean7CountyVmt: { type: sequelize_1.DataTypes.INTEGER },
    mean7PercentChangeFromJan: { type: sequelize_1.DataTypes.INTEGER },
    dateAtLow: { type: sequelize_1.DataTypes.STRING },
    mean7CountyVmtAtLow: { type: sequelize_1.DataTypes.INTEGER },
    percentChangeFromLow: { type: sequelize_1.DataTypes.INTEGER },
}, {
    sequelize: db_1.sequelize,
    tableName: "Vehicles",
});
/*
 */
//# sourceMappingURL=Vehicles.js.map