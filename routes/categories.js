import express from "express";
const router = express.Router();
import { getCategories } from "../models/index.js";

//general get all request
router.get("/", async function (req, res) {
  const result = await getCategories();
  res.json({
    success: true,
    message: "categories will be returned here",
    payload: result,
  });
});

export default router;
