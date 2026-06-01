const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dns = require('dns');
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const foodRoutes = require("./routes/foodRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const adminRoutes = require("./routes/adminRoutes");




dns.setServers(['8.8.8.8', '1.1.1.1']);

require("dotenv").config();

const app = express();
connectDB();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://online-food-app-xfcf.vercel.app"
  ],
  credentials: true
}

));
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/foods", foodRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

app.get("/test", (req, res) => {
  res.send("Backend Updated");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});