const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => res.send("Backend running with SQLite!"));

const PORT = process.env.PORT || 5000;

// Sync database
sequelize.sync({ alter: true })
  .then(() => console.log("✅ SQLite DB synced"))
  .catch((err) => console.error("❌ DB sync failed:", err));

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
