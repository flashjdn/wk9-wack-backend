import express from "express";
const router = express.Router();
import { getSubCategories } from "../models/index.js";

//general get all request
router.get("/", async function (req, res) {
  const result = await getSubCategories();
  res.json({
    success: true,
    message: "subcategories woooo",
    payload: result,
  });
});

export default router;
