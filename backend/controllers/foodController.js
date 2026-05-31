const Food = require("../models/Food");


// ADD FOOD

const addFood = async (req, res) => {

  try {

    const food = await Food.create(
      req.body
    );

    res.status(201).json(food);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


// GET ALL FOODS

const getFoods = async (
  req,
  res
) => {

  try {

    const foods =
      await Food.find();

    res.json(foods);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

const deleteFood = async (req, res) => {

  try {

    const food = await Food.findByIdAndDelete(
      req.params.id
    );

    if (!food) {
      return res.status(404).json({
        message: "Food not found"
      });
    }

    res.json({
      message: "Food deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


module.exports = {

  addFood,
  getFoods,
  deleteFood

};