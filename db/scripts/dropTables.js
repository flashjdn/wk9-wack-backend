import { query } from "../index.js";

async function dropTables() {
    const res = await query(`
        DROP TABLE IF EXISTS users, learning_categories, sub_categories, posts, comments CASCADE;
        `);
    console.log(`${res.command}  all tables deleted from database.`);
}

dropTables();