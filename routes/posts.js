import express from "express";
import { createPost,
        getAllPosts,
        getPostsByUser,
        getPostsByMostLiked,
        getPostsChronological,
        getPostsReverseChronological,
        deletePost,
        } from "../models/posts.js";

const router = express.Router();



// ************** Get Requests **************************************
router.get("/", async function (req, res) {
    const result = await getAllPosts();
    res.json({
        success: true,
        payload: result
    });
});

router.get("/bynewest", async function (req, res) {
    const result = await getPostsChronological();
    res.json({
        success: true,
        payload: result
    });
});

router.get("/byoldest", async function (req, res) {
    const result = await getPostsReverseChronological();
    res.json({
        success: true,
        payload: result
    });
});

router.get("/mostliked", async function (req, res) {
    const result = await getPostsByMostLiked();
    res.json({
        success: true,
        payload: result
    });
});

router.get("/:username", async function (req, res) {
    const result = await getPostsByUser(req.params.username);
    res.json({
        success: true,
        payload: result
    });
});


// ************** Create Request **************************************
router.post("/", async function (req, res) {
    const result = await createPost(req);
    res.json({
        success: true, 
        payload: result,
    });
});


// ************** Delete Request **************************************
router.delete("/delete/:post_id", async function (req, res) {
    const post_id = req.params.post_id;
    const result = await deletePost(post_id);
    res.json({
        success: true,
        payload: result
    });
});

export { router as postsRouter }; 