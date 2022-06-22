import pg from "pg";

const pool = new pg.Pool({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port,
    ssl: { rejectUnauthorized: false },
  });

  function poolEnvVarCheck() {
    if (typeof process.env.PGUSER === "undefined" || typeof process.env.PGHOST === "undefined"  || 
    typeof process.env.PGDATABASE === "undefined" || typeof process.env.PGPASSWORD === "undefined" || 
    typeof process.env.PGPORT === "undefined" ) {
        console.log("Some or all enivronment variables missing in Pool");
    }
    console.log("credentials are working");
};

export function query(text, params, callback) {
    return pool.query(text, params, callback);
};

poolEnvVarCheck()

    // "db-run-test": "node -r dotenv/config ./db/index.js",