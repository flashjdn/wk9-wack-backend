import { query } from "../index.js";

//***************Users Table ***********************//
const createUsersTableSqlString = `
    CREATE TABLE IF NOT EXISTS users (
        user_id INT GENERATED ALWAYS AS IDENTITY,
        username VARCHAR(16) NOT NULL,
        first_name VARCHAR NOT NULL,
        surname VARCHAR NOT NULL,
        password VARCHAR(128) NOT NULL,
        email VARCHAR(128) NOT NULL,
        join_date TIMESTAMP,
        PRIMARY KEY(user_id)
    );
`;
async function createUsersTable() {
    const res = await query(createUsersTableSqlString);
    console.log(`${res.command} Created new table named users`);
};

//************* Public view of Users Table (no password) ***********************//

const createUsersPublicView = `
    CREATE VIEW users_public AS
    SELECT user_id, username, first_name, surname, email, join_date
    FROM users;
 `;

 async function createPublicUsersView() {
    const res = await query(createUsersPublicView);
    console.log(`${res.command} Created new table view named users_public`);
 };

//*********************** Learning Categories Table ***********************//
const createLearningCategoriesTableSqlString = `
    CREATE TABLE IF NOT EXISTS learning_categories (
        category_id INT GENERATED ALWAYS AS IDENTITY,
        title VARCHAR(64),
        description TEXT,
        img_links TEXT,
        date TIMESTAMP,
        PRIMARY KEY(category_id)
    );    
`;

async function createLearningCategoriesTable() {
    const res = await query(createLearningCategoriesTableSqlString);
    console.log(`${res.command} Created new table named learning categories`);
};


//*********************** Sub Categories Table ***********************//

const createSubCategoriesTableSqlString = `
    CREATE TABLE IF NOT EXISTS sub_categories (
        sub_category_id INT GENERATED ALWAYS AS IDENTITY,
        category_id INT NOT NULL,
        title VARCHAR(64) NOT NULL,
        PRIMARY KEY(sub_category_id),
        FOREIGN KEY(category_id)
            REFERENCES learning_categories(category_id)
            ON DELETE CASCADE
    );
`;

async function createSubCategoriesTable() {
    const res = await query(createSubCategoriesTableSqlString);
    console.log(`${res.command} Created new table named sub-categories`);
};

//*********************** Posts Table ***********************//

const createPostsTableSqlString = `
    CREATE TABLE IF NOT EXISTS posts (
        post_id INT GENERATED ALWAYS AS IDENTITY,
        user_id INT NOT NULL,
        sub_category_id INT NOT NULL,
        title VARCHAR(64) NOT NULL,
        content TEXT NOT NULL,
        post_date TIMESTAMP,
        upvote INT,
        pinned BOOLEAN,
        PRIMARY KEY(post_id),
        FOREIGN KEY(user_id)
            REFERENCES users(user_id)
            ON DELETE CASCADE,
        FOREIGN KEY(sub_category_id)
            REFERENCES sub_categories(sub_category_id)
            ON DELETE CASCADE
    );
`;

async function createPostsTable() {
    const res = await query(createPostsTableSqlString);
    console.log(`${res.command} Created new table named posts`);
};

//*********************** Comments Table ***********************//


const createCommentsTableSqlString = `
    CREATE TABLE IF NOT EXISTS comments(
        comment_id INT GENERATED ALWAYS AS IDENTITY,
        post_id INT NOT NULL,
        user_id INT NOT NULL,
        content TEXT, 
        post_date TIMESTAMP, 
        upvote INT,
        pinned BOOLEAN,
        PRIMARY KEY(comment_id),
            FOREIGN KEY(user_id)
            REFERENCES users(user_id)
            ON DELETE CASCADE,
        FOREIGN KEY(post_id)
            REFERENCES posts(post_id)
            ON DELETE CASCADE
    );
`;

async function createCommentsTable() {
    const res = await query(createCommentsTableSqlString);
    console.log(`${res.command} Created new table named comments`);
};

//*********************** Calling all functions for script ***********************//
await createUsersTable();
await createPublicUsersView()
await createLearningCategoriesTable();
await createSubCategoriesTable();
await createPostsTable();
await createCommentsTable();