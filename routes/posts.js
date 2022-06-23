import express from "express";
import { createPost,
        getAllPosts,
        getPostsByUser,
        getPostsByMostLiked,
        getPostsChronological,
        getPostsReverseChronological,
        deletePost,
        incrementUpvote,
        pinPost,
        unPinPost,
        editPost,
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

router.get("/:username", async function (req, res) {
    const result = await getPostsByUser(req.params.username);
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



// ************** Create Request **************************************
router.post("/", async function (req, res) {
    const result = await createPost(req);
    res.json({
        success: true, 
        payload: result,
    });
});

// ************** Update Requests **************************************
router.put("/edit/:post_id", async function (req, res) {
    const post_id = req.params.post_id;
    const [ title, content ] = [ req.body.title, req.body.content ];
    const result = await editPost(post_id, title, content);
    res.json({
        success: true,
        payload: result
    });
});


router.put("/upvote/:post_id", async function (req, res) {
    const post_id = req.params.post_id;
    const result = await incrementUpvote(post_id);
    res.json({
        success: true, 
        payload: result
    });
});

router.put("/pin/:post_id", async function (req, res) {
    const post_id = req.params.post_id;
    const result = await pinPost(post_id);
    res.json({
        success: true, 
        payload: result
    });
});

router.put("/unpin/:post_id", async function (req, res) {
    const post_id = req.params.post_id;
    const result = await unPinPost(post_id);
    res.json({
        success: true, 
        payload: result
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

export { router  as postsRouter }; 