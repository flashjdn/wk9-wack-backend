import express from "express";
const router = express.Router();
import getComments from "../models/index.js";

//general get all request
router.get("/", async function (req, res) {
    const result = await getComments();
    res.json({
        success: true,
        payload: result
    });
});
