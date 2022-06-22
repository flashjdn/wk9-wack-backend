import { query } from "../db/index.js";

// ************** Create Request **************************************
export async function createComment(req) {
    const [ post_id, username, user_id, content ] =
    [ Number(req.body.post_id), req.body.username, 
        Number(req.body.user_id), req.body.content];
        console.log(post_id, username, user_id, content)
    
    const result = await query(`
        INSERT INTO comments 
        (post_id, username, user_id, content, post_date, upvote, pinned)
        VALUES 
        ($1, $2, $3, $4, CURRENT_TIMESTAMP, 0, FALSE) 
        RETURNING *;`,
        [post_id, username, user_id, content]
    );
    return result.rows;
};

// ************** Get Requests **************************************
export async function getAllComments(post_id) {
    const result = await query(`
    SELECT * FROM comments
    WHERE post_id = $1;`,
    [post_id] );
    return result.rows;
};

export async function getCommentsByUser(username) {
    const result = await query(`
        SELECT * FROM comments
        WHERE username ILIKE  $1
        ORDER BY post_date DESC;
    `, 
    [username]);     
    return result.rows;
};

export async function getCommentsByMostLiked(post_id) {
    const result = await query(`
        SELECT * FROM comments
        WHERE post_id = $1
        ORDER BY upvote DESC;`,
        [post_id] );
    return result.rows;
};

export async function getCommentsChronological(post_id) {
    const result = await query(`
        SELECT * FROM comments
        WHERE post_id = $1
        ORDER BY post_date DESC;`,
        [post_id] );
    return result.rows;
};

export async function getCommentsReverseChronological(post_id) {
    const result = await query(`
        SELECT * FROM comments
        WHERE post_id = $1
        ORDER BY post_date ASC;`,
        [post_id] );
    return result.rows;
};

// ************** Update Requests **************************************
// export async function editPost(post_id, title, content) {
//     const result = await query(`
//         UPDATE posts
//         SET title = $1, content = $2
//         WHERE post_id = $3;`,
//         [title, content, post_id]);
//     console.log(result.command)
//     return result.command;
// };


// export async function incrementUpvote(post_id) {
//     const result = await query(`
//         UPDATE posts
//         SET upvote = upvote + 1 
//         WHERE post_id = $1;`, 
//         [post_id]);
//     return result.command;
// };

// export async function pinPost(post_id) {
//     const result = await query(`
//         UPDATE posts
//         SET pinned = TRUE
//         WHERE post_id = $1
//         RETURNING *;`,
//         [post_id]);
//     return result.command
// };

// export async function unPinPost(post_id) {
//     const result = await query(`
//         UPDATE posts
//         SET pinned = FALSE
//         WHERE post_id = $1
//         RETURNING *;`,
//         [post_id]);
//     return result.command;
// };

// ************** Delete Request **************************************
// export async function deletePost(post_id) {
//     const result = await query(`
//         DELETE FROM posts
//         WHERE post_id = $1;`, 
//         [post_id]);
//     if (result.rowCount === 0) {
//         return `No post found with ID: ${post_id}`;
//     };
//     return result.command;
// };