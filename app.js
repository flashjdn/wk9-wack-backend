import express from "express";
import categories from "./routes/categories.js";
const app = express();
const PORT = process.env.port || 3000;

// test route

app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "Week 9 server is LIVE!",
  });
});

app.use("/categories", categories);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
