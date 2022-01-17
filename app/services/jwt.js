const jwt = require("jsonwebtoken");

// Generate access token
const generateAccessTokn = (data) => {
  return jwt.sign({ data }, process.env.APP_SECRET_KEY);
};

// Check client token
const verify = async (token) => {
  try {
    let payload = await jwt.verify(token, process.env.APP_SECRET_KEY);
    return payload;
  } catch (err) {
    console.log("jwt verify err :>> ", err);
    return false;
  }
};

// Decode token data
const decode = async (token) => {
  return await jwt.decode(token);
};

module.exports = { generateAccessTokn, verify, decode };
