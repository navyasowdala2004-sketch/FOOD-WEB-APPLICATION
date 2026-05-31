const express = require("express");

const router = express.Router();

const {
  addFood,
  getFoods,
  deleteFood
} = require("../controllers/foodController");

router.post(
  "/", 
  addFood
);


router.get(
  "/", 
  getFoods
);


router.delete(
  "/:id", 
  deleteFood
);



module.exports = router;