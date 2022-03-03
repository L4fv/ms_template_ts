import { sequelize } from "./../db/db";
import { Model, DataTypes } from "sequelize";

export class Vehicles extends Model {
  public id!: number;
  public countyFips!: number;
  public countyName!: string;
  public stateName!: string;
  public date!: string;
  public countyVmt!: number;
  public baselineJanVmt!: number;
  public percentChangeFromJan!: number;
  public mean7CountyVmt!: number;
  public mean7PercentChangeFromJan!: number;
  public dateAtLow!: string;
  public mean7CountyVmtAtLow!: number;
  public percentChangeFromLow!: number;
}

Vehicles.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    countyFips: { type: DataTypes.INTEGER },
    countyName: { type: DataTypes.STRING },
    stateName: { type: DataTypes.STRING },
    date: { type: DataTypes.STRING },
    countyVmt: { type: DataTypes.INTEGER },
    baselineJanVmt: { type: DataTypes.INTEGER },
    percentChangeFromJan: { type: DataTypes.INTEGER },
    mean7CountyVmt: { type: DataTypes.INTEGER },
    mean7PercentChangeFromJan: { type: DataTypes.INTEGER },
    dateAtLow: { type: DataTypes.STRING },
    mean7CountyVmtAtLow: { type: DataTypes.INTEGER },
    percentChangeFromLow: { type: DataTypes.INTEGER },
  },
  {
    sequelize,
    tableName: "Vehicles",
    timestamps: false,
  }
);
/*
 */
