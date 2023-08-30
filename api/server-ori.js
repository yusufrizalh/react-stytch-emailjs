import express from "express";
import cors from "cors";
import dbConn from "./config/database.js";
import router from "./routes/router.js";

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

app.listen(8001, () => console.log("Server running at http://localhost:8001"));
