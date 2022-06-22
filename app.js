import express from "express";
// import categoriesRouter from "./routes/categories.js";
// import subCategoriesRouter from "./routes/subCategories.js";
import { postsRouter } from "./routes/posts.js";
import { commentsRouter } from "./routes/comments.js";

const app = express();
const PORT = process.env.port || 3000;

app.use(express.json())


// ************************ Test Route **************************************
app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "Week 9 server is LIVE!",
  });
});


// ************************ Routers **************************************
app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);


// app.use("/categories", categoriesRouter);
// app.use("/sub-categories", subCategoriesRouter);


// ************************ Port  **************************************
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
