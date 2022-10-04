import { query } from "../index.js";

//***************Populate Users Table ***********************//
async function populateUsersTable() {
    const res = await query(`
    INSERT INTO users (username, first_name, surname, password, email, join_date)
    VALUES
    ('chocorainaaa', 'Raina', 'Blackett', 123456, 'blackettraina@gmail.com', CURRENT_TIMESTAMP),
    ('mikey1985', 'Mike', 'Rushton', 654321, 'michaelwjrushton@gmail.com', CURRENT_TIMESTAMP),
    ('fakeperson1', 'fake1', 'person1', 53462373, 'fakeperson1@gmail.com', CURRENT_TIMESTAMP),
    ('fakeperson2', 'fake2', 'person2', 2345345, 'fakeperson2@gmail.com', CURRENT_TIMESTAMP),
    ('fakeperson3', 'fake3', 'person3', 435456, 'fakeperson3@gmail.com', CURRENT_TIMESTAMP);
    `);
    console.log(`${res.command} Populated user table with dummy data`);
};

//*********************** Populate Learning Categories Table ***********************//
async function populateLearningCategoriesTable() {
    const res = await query(`
    INSERT INTO learning_categories (title, description, img_links, date)
    VALUES
    ('React', 'React is a...', 'testlink1', CURRENT_TIMESTAMP),
    ('Node', 'Noce is...', 'testlink2', CURRENT_TIMESTAMP),
    ('SQL', 'SQL is a...', 'testlink3', CURRENT_TIMESTAMP),
    ('Testing with Jest', 'Jest is a...', 'testlink4', CURRENT_TIMESTAMP);
    `);
};

//*********************** Populate Sub Categories Table ***********************//
async function populateSubCategoriesTable() {
    const res = await query(`
    INSERT INTO sub_categories (category_id, title)
    VALUES
    (1, 'Resources'),
    (1, 'Tips'),
    (1, 'Questions'),
    (2, 'Resources'),
    (2, 'Tips'),
    (2, 'Questions'),
    (3, 'Resources'),
    (3, 'Tips'),
    (3, 'Questions'),
    (4, 'Resources'),
    (4, 'Tips'),
    (4, 'Questions');
    `);
};

//*********************** Populate Posts Table ***********************//
async function populatePostsTable() {
    const res = await query(`
    INSERT INTO posts (user_id, sub_category_id, username, title, content, post_date, upvote, pinned)
    VALUES
    (1, 1, 'Raina', 'Great video to help with React', 'Check out this video here!', CURRENT_TIMESTAMP, 0,FALSE),
    (1, 4,'Mike', 'Great video to help with Node', 'Check out this video here!', CURRENT_TIMESTAMP, 2, TRUE),
    (2, 7, 'Stefano','Great video to help with SQL', 'Check out this video here!', CURRENT_TIMESTAMP, 3, FALSE),
    (3, 10,'Jordan', 'Can anyone help with Jest and Supertest?', 'Check out this video here!', CURRENT_TIMESTAMP, 1, TRUE);
    `);
};

//*********************** Populate Comments Table ***********************//
async function populateCommentsTable() {
    const res = await query(`
        INSERT INTO comments (post_id, user_id, username, content, post_date, upvote, pinned)
        VALUES
        (1, 2, 'Mike', 'Thanks for the React video!', CURRENT_TIMESTAMP, 2, FALSE),
        (2, 1, 'Jordan', 'Thanks for the Node video!', CURRENT_TIMESTAMP, 5, TRUE),
        (1, 3, 'Stefano', 'Thanks for the React video!', CURRENT_TIMESTAMP, 0, FALSE);
    `);
};

//*********************** Calling all functions for script ***********************//
await populateUsersTable();
await populateLearningCategoriesTable();
await populateSubCategoriesTable();
await populatePostsTable();
await populateCommentsTable();