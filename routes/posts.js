import express from "express";
const router = express.Router();
import getPosts from "../models/index.js";

//general get all posts request
router.get("/", async function (req, res) {
    const result = await getPosts();
    res.json({
        success: true,
        payload: result
    });
});

// CREATE request 


