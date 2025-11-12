// src/config/db.js
const { Sequelize } = require("sequelize");
const path = require("path");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "../../data/database.sqlite"), // file inside backend/data/
  logging: false,
});

module.exports = sequelize;
