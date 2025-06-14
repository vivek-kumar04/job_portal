import serverless from "serverless-http";
import app from "../setupApp.js";
import dbConnection from "../database/dbConnection.js";
import "../config/cloudinary.js"; // Assuming you made cloudinary config reusable

dbConnection(); // Connect to MongoDB

export default serverless(app);
