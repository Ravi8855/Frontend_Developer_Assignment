// src/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/db');
const routes = require('./routes/index');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true })
  .then(() => console.log('✅ DB synced (tables created/updated)'))
  .catch(err => console.error('❌ DB sync failed:', err));

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
