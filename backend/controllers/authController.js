const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const ADMIN_LOGIN_CODE = process.env.ADMIN_LOGIN_CODE || "ADMIN123";

// REGISTER USER
const registerUser = async (req, res) => {
  try {
    const { name, email, password } =
      req.body;

    const userExists =
      await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message:
          "User Already Exists",
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user =
      await User.create({
        name,
        email,
        password:
          hashedPassword,
      });

    res.status(201).json({
      message:
        "User Registered",
      user,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// LOGIN USER
const loginUser = async (req, res) => {
  try {
    const { email, password, adminCode } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User Not Found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    if (user.role === "admin") {
      if (!adminCode || adminCode.toLowerCase() !== ADMIN_LOGIN_CODE.toLowerCase()) {
        return res.status(401).json({
          message: "Invalid admin access code.",
        });
      }
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// LOGIN ADMIN
const loginAdmin = async (req, res) => {
  try {
    const { email, password, adminCode } = req.body;

    if (!adminCode || adminCode.toLowerCase() !== ADMIN_LOGIN_CODE.toLowerCase()) {
      return res.status(401).json({
        message: "Invalid admin access code.",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User Not Found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    if (user.role !== "admin") {
      return res.status(403).json({
        message: "Admin access is restricted to authorized accounts.",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// REGISTER ADMIN
const registerAdmin = async (req, res) => {
  try {
    const { name, email, password, adminCode } = req.body;

    if (!adminCode || adminCode.toLowerCase() !== ADMIN_LOGIN_CODE.toLowerCase()) {
      return res.status(401).json({
        message: "Invalid admin access code.",
      });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        message: "User Already Exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "admin",
    });

    res.status(201).json({
      message: "Admin Registered",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// EXPORTS
module.exports = {
  registerUser,
  loginUser,
  loginAdmin,
  registerAdmin,
};