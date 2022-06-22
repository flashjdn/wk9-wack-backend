import express from "express";
import { createComment,
        getAllComments,
        getCommentsByUser,
        getCommentsByMostLiked,
        getCommentsChronological,
        getCommentsReverseChronological,
        // deleteComments,
        // incrementUpvote,
        // pinComments,
        // unPinComments,
        // editComments,
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
router.get("/all-comments/:post_id", async function (req, res) {
    const post_id = req.params.post_id;
    const result = await getAllComments(post_id);
    res.json({
        success: true,
        payload: result
    });
});

router.get("/:username", async function (req, res) {
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
// router.put("/edit/:post_id", async function (req, res) {
//     const post_id = req.params.post_id;
//     const [ title, content ] = [ req.body.title, req.body.content ];
//     const result = await editPost(post_id, title, content);
//     res.json({
//         success: true,
//         payload: result
//     });
// });


// router.put("/upvote/:post_id", async function (req, res) {
//     const post_id = req.params.post_id;
//     const result = await incrementUpvote(post_id);
//     res.json({
//         success: true, 
//         payload: result
//     });
// });

// router.put("/pin/:post_id", async function (req, res) {
//     const post_id = req.params.post_id;
//     const result = await pinPost(post_id);
//     res.json({
//         success: true, 
//         payload: result
//     });
// });

// router.put("/unpin/:post_id", async function (req, res) {
//     const post_id = req.params.post_id;
//     const result = await unPinPost(post_id);
//     res.json({
//         success: true, 
//         payload: result
//     });
// });

// ************** Delete Request **************************************
// router.delete("/delete/:post_id", async function (req, res) {
//     const post_id = req.params.post_id;
//     const result = await deletePost(post_id);
//     res.json({
//         success: true,
//         payload: result
//     });
// });

export { router as commentsRouter }; 