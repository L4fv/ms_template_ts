"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(__dirname + "../../../.env") });
const Vehicles_1 = require("../models/Vehicles");
Vehicles_1.Vehicles.sync({ force: true });
//# sourceMappingURL=seed.js.map