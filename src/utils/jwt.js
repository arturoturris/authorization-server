const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

const privateKey = fs.readFileSync(
  path.resolve(__dirname, "..", "..", "private.key"),
  "utf-8"
);

const issuer = process.env.JWT_ISSUER;
const audience = process.env.JWT_AUDIENCE;
const expiresIn = process.env.JWT_EXPIRES_IN;
const signOptions = {
  issuer,
  audience,
  expiresIn,
  algorithm: "RS256",
};

exports.getAccessToken = (payload) => {
  return jwt.sign(payload, privateKey, signOptions);
};
