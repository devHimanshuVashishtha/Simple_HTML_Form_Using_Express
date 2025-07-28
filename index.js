const express = require("express");
const path = require('path')
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  res.send(`Form Submitted <b><p>name is :${name} and email is :${email}</p>`);
});


app.listen(PORT, () => {
  console.log(`server is running at http://localhost:3000`);``
});
