const fetch = require("node-fetch");

const endpoint = process.env.FIREBASE_ENDPOINT;

exports.getUserHashedPassword = async (user) => {
  try {
    const response = await fetch(`${endpoint}/usuarios/${user}.json`);
    return await response.json();
  } catch (error) {
    return null;
  }
};

exports.getUserRole = async (user) => {
  try {
    const response = await fetch(`${endpoint}/usuarios_info/${user}.json`);
    const data = await response.json();
    return data.rol;
  } catch (error) {
    return null;
  }
};
