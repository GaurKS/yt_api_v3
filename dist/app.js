"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
// const pool = new Pool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: parseInt(process.env.DB_PORT || "5432")
// });
// const connectToDB = async () => {
//   try {
//     await pool.connect();
//   } catch (err) {
//     console.log(err);
//   }
// };
// connectToDB();
app.get("/test", (req, res, next) => {
    res.send("Server is up and running...🚀");
});
app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`);
});
