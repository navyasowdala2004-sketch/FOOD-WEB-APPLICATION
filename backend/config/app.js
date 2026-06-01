const express = require("express");
const cors = require("cors");
const app = express();
const app = require("./app");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const foodRoutes = require("./routes/foodRoutes");

app.use(cors({
    origin: [   "http://localhost:5173",
    "https://online-food-app-weld.vercel.app"
    ],
    credentials: true
}

));
app.use(express.json());

// ✅ THIS IS CRITICAL
app.use("/api/foods", foodRoutes);
app.get("/test", (req, res) => {
  res.send("Backend Updated");

  });

module.exports = app;