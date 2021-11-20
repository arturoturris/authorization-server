const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;
const issuer = process.env.JWT_ISSUER;
const audience = process.env.JWT_AUDIENCE;
const expiresIn = process.env.JWT_EXPIRES_IN;
const signOptions = {
  issuer,
  audience,
  expiresIn,
  algorithm: "HS256",
};

exports.getAccessToken = (payload) => {
  return jwt.sign(payload, secret, signOptions);
};
