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
    // const [ user_id, sub_category_id, title, content ] =
    // [ Number(req.body.user_id), Number(req.body.sub_category_id), 
    //     req.body.title, req.body.content ];

    // const result = await createPost(
    //     user_id, sub_category_id, title, content);
    const result = await createPost(req);
    console.log(result);
    res.json({
        success: true, 
        payload: result,
    });
});




export { router as postsRouter }; 