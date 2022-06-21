import express from "express";
import categoriesRouter from "./routes/categories.js";
import { subCategoriesRouter } from "./routes/subCategories.js";
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
app.use("/sub-categories", subCategories);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
