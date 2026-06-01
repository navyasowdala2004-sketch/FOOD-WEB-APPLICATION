const express = require("express");
const cors = require("cors");
const app = express();

const foodRoutes = require("./routes/foodRoutes");

app.use(cors());
app.use(express.json());

// ✅ THIS IS CRITICAL
app.use("/api/foods", foodRoutes);

module.exports = app;