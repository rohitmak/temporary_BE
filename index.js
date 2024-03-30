require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello, From BE");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Page</h1>");
});

app.get("/signup", (req, res) => {
  res.send("<h1>Signup Page</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
