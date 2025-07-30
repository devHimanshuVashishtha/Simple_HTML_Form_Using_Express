const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const User = require("./models/user");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongooseURI =
  "mongodb+srv://himanshuvashishtha001hp:eRluTrUEbIEv9B9a@cluster2.4rpmdkm.mongodb.net/";

mongoose.connect(mongooseURI).then(() => console.log("Database Connected"));

app.post("/submit", async(req, res) => {
  const { name, email } = req.body;
  const user = new User({ name, email });
  const saveUser = await user.save()
  res.json({message:'Details send to the DataBase',user:saveUser});
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "form.html"));
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:3000`);
  ``;
});
