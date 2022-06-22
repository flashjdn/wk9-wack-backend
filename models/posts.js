import { query } from "../db/index.js";

export async function createPost(req) {
    
    const [ user_id, sub_category_id, username, title, content ] =
    [ Number(req.body.user_id), Number(req.body.sub_category_id), 
        req.body.username, req.body.title, req.body.content ];
    
    const result = await query(`
        INSERT INTO posts 
        (user_id, sub_category_id, username, title, content, post_date, upvote, pinned)
        VALUES 
        ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP, 0, FALSE) 
        RETURNING *;`,
        [user_id, sub_category_id, username, title, content]
    );
    return result.rows;
};

/*    
Read 

export async function getPosts() {
  console.log("test post");
}

    - Get request 
    Paramaters: 
    - By user_id
    - By most liked 
    - General get all 

Update 

- Update upvote
    Parameter: 
    - post_id
    Functionality:
    - upvote++ 

- Update pin 
  Parameter: 
    - post_id
    Functionality:
    - change FALSE to TRUE 

- Edit content
    Parameter: 
    - post_id
    Functionality:
    - change the title 
    - change the content

    STRETCH goal:
    - change location

Delete
    - Delete comment 
    Paramater: 
        - post_id
    Functionality: 
        - Delete the main post (do this first)
        - Delete all associated comments (come back to this after comments CRUD operators)
*/
