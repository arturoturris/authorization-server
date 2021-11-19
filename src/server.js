if (process.env.NODE_ENV != "production")
  require("dotenv").config({ path: ".env" });

const express = require("express");

const app = express();
const port = process.env.PORT || 3300;
const {
  authenticateUser,
  authorizeUser,
  verifyToken,
} = require("./controllers/login.controller");

//CONFIG
app.set("port", port);

//MIDDLEWARES
app.use(require("morgan")("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ROUTES
app.get("/login", authenticateUser, authorizeUser);

//SERVER
app.listen(app.get("port"), () => {
  console.log(`APP WORKING ON PORT ${app.get("port")}`);
});
