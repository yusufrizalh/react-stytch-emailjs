import express from "express";
import cors from "cors";
import dbConn from "./config/database.js";
import router from "./routes/router.js";

import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3002;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

try {
  // database connection
  dbConn.sync();
  console.log("Database connection established...");
} catch (error) {
  console.error("Database connection error: ", error);
}

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
