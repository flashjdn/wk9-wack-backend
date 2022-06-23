import { query } from "../db/index.js";

// ************** Create Request **************************************
export async function createComment(req) {
  const [post_id, username, user_id, content] = [
    Number(req.body.post_id),
    req.body.username,
    Number(req.body.user_id),
    req.body.content,
  ];
  console.log(post_id, username, user_id, content);

  const result = await query(
    `
        INSERT INTO comments 
        (post_id, username, user_id, content, post_date, upvote, pinned)
        VALUES 
        ($1, $2, $3, $4, CURRENT_TIMESTAMP, 0, FALSE) 
        RETURNING *;`,
    [post_id, username, user_id, content]
  );
  return result.rows;
}

// ************** Get Requests **************************************
export async function getAllComments() {
  const result = await query(`
    SELECT * FROM comments`);
  return result.rows;
}

export async function getAllCommentsById(post_id) {
    const result = await query(`
    SELECT * FROM comments
    WHERE post_id = $1;`,
    [post_id]
  );
  return result.rows;
}

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
  const result = await query(
    `
        SELECT * FROM comments
        WHERE post_id = $1
        ORDER BY upvote DESC;`,
    [post_id]
  );
  return result.rows;
}

export async function getCommentsChronological(post_id) {
  const result = await query(
    `
        SELECT * FROM comments
        WHERE post_id = $1
        ORDER BY post_date DESC;`,
    [post_id]
  );
  return result.rows;
}

export async function getCommentsReverseChronological(post_id) {
  const result = await query(
    `
        SELECT * FROM comments
        WHERE post_id = $1
        ORDER BY post_date ASC;`,
    [post_id]
  );
  return result.rows;
}

// ************** Update Requests **************************************
export async function editComment(comment_id, content) {
  const result = await query(
    `
        UPDATE comments
        SET content = $1
        WHERE comment_id = $2;`,
    [content, comment_id]
  );
  return result.command;
}

export async function incrementUpvote(comment_id) {
  const result = await query(
    `
        UPDATE comments
        SET upvote = upvote + 1 
        WHERE comment_id = $1;`,
    [comment_id]
  );
  return result.command;
}

export async function pinComment(comment_id) {
  const result = await query(
    `
        UPDATE comments
        SET pinned = TRUE
        WHERE comment_id = $1
        RETURNING *;`,
    [comment_id]
  );
  return result.command;
}

export async function unPinComment(comment_id) {
  const result = await query(
    `
        UPDATE comments
        SET pinned = FALSE
        WHERE comment_id = $1
        RETURNING *;`,
    [comment_id]
  );
  return result.command;
}

// ************** Delete Request **************************************
export async function deleteComment(comment_id) {
  const result = await query(
    `
        DELETE FROM comments
        WHERE comment_id = $1;`,
    [comment_id]
  );
  if (result.rowCount === 0) {
    return `No post found with ID: ${comment_id}`;
  }
  return result.command;
}
