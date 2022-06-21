import express from "express";
const router = express.Router();
import getCredentials from "../models/index.js";

//general get all request
router.get("/", async function (req, res) {
    const result = await getCredentials();
    res.json({
        success: true,
        payload: result
    });
});