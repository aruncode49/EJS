import express from "express";

const app = express();
const port = 3000;

// Step:1 -> use express static middleware to use the static files presend inside the public folder like style.css
app.use(express.static("public"));

// Step:2 -> Adding routes to home, about and  contact pages.
app.get("/", (req, res) => {
  res.render("partial.ejs", { fileName: "home" });
});

app.get("/about", (req, res) => {
  res.render("partial.ejs", { fileName: "about" });
});

app.get("/contact", (req, res) => {
  res.render("partial.ejs", { fileName: "contact" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
