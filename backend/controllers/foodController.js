import foodModel from "../models/foodModels.js";
import fs from "fs";

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
    category: req.body.category,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to add food" });
  }
};

const listFood = async (req, res) => {
  try {
    const food = await foodModel.find({});
    res.json({
      success: true,
      data: food,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to list food" });
  }
};

export { addFood, listFood };
