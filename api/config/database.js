import { Sequelize } from "sequelize";

// connection
const dbConn = new Sequelize("dbfullstack", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default dbConn;
