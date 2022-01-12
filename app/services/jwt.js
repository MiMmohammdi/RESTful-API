const jwt = require("jsonwebtoken");

// Sing new token 
const sign = (data) => {
  return jwt.sign(data, process.env.APP_SECRET_KEY);
};

// Check client token
const verify = (token) => {
  try {
    let payload = jwt.verify(token, process.env.APP_SECRET_KEY);
    return payload;
  } catch (err) {
    console.log("jwt verify err :>> ", err);
    return false;
  }
};

// Decode token data
const decode = (token) => {
  return jwt.decode(token);
};

module.exports = { sign, verify, decode };
