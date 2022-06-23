import express from "express";
import {
  createComment,
  getAllComments,
  getAllCommentsById,
  getCommentsByUser,
  getCommentsByMostLiked,
  getCommentsChronological,
  getCommentsReverseChronological,
  deleteComment,
  incrementUpvote,
  pinComment,
  unPinComment,
  editComment,
} from "../models/comments.js";

const router = express.Router();

// ************** Create Request **************************************
router.post("/", async function (req, res) {
    const result = await createComment(req);
    res.json({
        success: true, 
        payload: result,
    });
});

// ************** Get Requests **************************************
router.get("/", async function (req, res) {
    const result = await getAllComments();
    res.json({
        success: true,
        payload: result,
    });
});

router.get("/:post_id", async function (req, res) {
    const post_id = req.params.post_id;
    const result = await getAllCommentsById(post_id);
    res.json({
        success: true,
        payload: result
    });
});

// not working 
router.get("by-user/:username", async function (req, res) {
    const result = await getCommentsByUser(req.params.username);
    res.json({
        success: true,
        payload: result
    });
});

router.get("/mostliked/:post_id", async function (req, res) {
    const post_id = req.params.post_id;
    const result = await getCommentsByMostLiked(post_id);
    res.json({
        success: true,
        payload: result
    });
});

router.get("/bynewest/:post_id", async function (req, res) {
    const post_id = req.params.post_id;
    const result = await getCommentsChronological(post_id);
    res.json({
        success: true,
        payload: result
    });
});

router.get("/byoldest/:post_id", async function (req, res) {
    const post_id = req.params.post_id;
    const result = await getCommentsReverseChronological(post_id);
    res.json({
        success: true,
        payload: result
    });
});

// ************** Update Requests **************************************
router.put("/edit/:comment_id", async function (req, res) {
    const comment_id = req.params.comment_id;
    const content  = req.body.content;
    const result = await editComment(comment_id, content);
    res.json({
        success: true,
        payload: result
    });
});


router.put("/upvote/:comment_id", async function (req, res) {
    const comment_id = req.params.comment_id;
    const result = await incrementUpvote(comment_id);
    res.json({
        success: true, 
        payload: result
    });
});

router.put("/pin/:comment_id", async function (req, res) {
    const comment_id = req.params.comment_id;
    const result = await pinComment(comment_id);
    res.json({
        success: true, 
        payload: result
    });
});

router.put("/unpin/:comment_id", async function (req, res) {
    const comment_id = req.params.comment_id;
    const result = await unPinComment(comment_id);
    res.json({
        success: true, 
        payload: result
    });
});

// ************** Delete Request **************************************
router.delete("/delete/:comment_id", async function (req, res) {
    const comment_id = req.params.comment_id;
    const result = await deleteComment(comment_id);
    res.json({
        success: true,
        payload: result
    });
});

export { router  as commentsRouter }; 