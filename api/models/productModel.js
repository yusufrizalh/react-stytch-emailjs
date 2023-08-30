import { Sequelize } from "sequelize";
import dbConn from "../config/database.js";

const { DataTypes } = Sequelize;
const productModel = dbConn.define(
  "products",
  {
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.DECIMAL },
    description: { type: DataTypes.TEXT },
  },
  { freezeTableName: true }
);

export default productModel;
