import * as dotenv from "dotenv";
import * as path from "path";
dotenv.config({ path: path.join(__dirname + "../../../.env") });
import { Vehicles } from "../models/Vehicles";

Vehicles.sync({ force: true });
