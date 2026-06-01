const express = require("express");
const cors = require("cors");
const app = express();

const foodRoutes = require("./routes/foodRoutes");

app.use(cors({
    origin: [
      "https://online-food-app-ouzi.vercel.app",
      "http://localhost:5173",
    ],
    credentials: true
}

));
app.use(express.json());

// ✅ THIS IS CRITICAL
app.use("/api/foods", foodRoutes);

module.exports = app;