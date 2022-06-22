import { query } from "../db/index.js";
/*
    Create:
    - post_id is automatically generated
Paramaters:
    - user_id
    - sub_cateogory_id
    - title 
    - content

In the functionality     
    - post_date (CURRENT_TIMESTAMP)
    - upvote (set to 0) 
    - pin (set to false) 
*/

export async function createPost(user_id, sub_category_id, title, content) {
    const result = await query(`
        INSERT INTO posts (user_id, sub_category_id, title, content, post_date, upvote, pinned)
        VALUES 
        ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP, 0, false);`,
        [user_id, sub_category_id, title, content]
    );
    return result;
};



/*    
Read 
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
