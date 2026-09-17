const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");


const {
  registerUser,
  loginUser,
  registerAdmin,
  loginAdmin,
} = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/register-admin", registerAdmin);
router.post("/login", loginUser);
router.post("/login-admin", loginAdmin);

router.get(
  "/profile",
  authMiddleware,
  (req, res) => {

    res.json({
      message: "Protected Route",
      user: req.user
    });

  }
);

router.get("/register-admin-test", (req, res) => {
  res.json({
    message: "Admin route is working"
  });
});

module.exports = router;