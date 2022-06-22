import express from "express";
import { createPost } from "../models/posts.js";

const router = express.Router();



//general get all posts request
router.get("/", async function (req, res) {
    const result = await getPosts();
    res.json({
        success: true,
        payload: result
    });
});

// ************** Create Request **************************************
router.post("/", async function (req, res) {
    const result = await createPost(req);
    console.log(result);
    res.json({
        success: true, 
        payload: result,
    });
});




export { router as postsRouter }; 