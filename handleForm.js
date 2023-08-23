import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// use body parser
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const heading = "Enter your name below 👇🏻";
  res.render("form.ejs", { heading });
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  const totalLetters = req.body.fName.length + req.body.lName.length;
  const heading = `There are ${totalLetters} letters in your name. `;
  res.render("form.ejs", { heading });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
