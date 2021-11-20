const md5 = require("md5");

const usuarioController = require("./usuario.controller");
const { getAccessToken } = require("../utils/jwt");

const compareUserPassword = (password, hashedPassword) => {
  return md5(password) === hashedPassword;
};

exports.authenticateUser = async (req, res, next) => {
  const { user, password } = req.body;
  const hashedPassword = await usuarioController.getUserHashedPassword(user);
  const isSuccessfullyAuthenticated = compareUserPassword(
    password,
    hashedPassword
  );

  if (!isSuccessfullyAuthenticated)
    return res
      .status(401)
      .json({ code: 401, message: "User or password doesn't match." });

  next();
};

exports.authorizeUser = async (req, res) => {
  const { user } = req.body;
  const role = await usuarioController.getUserRole(user);
  const accessToken = getAccessToken({ subject: user, rol: role });

  return res.json({ access_token: accessToken });
};
