import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // data object
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "orange"],
    htmlContent: "<em>This is some em text</em>",
  };

  res.render("tags.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
