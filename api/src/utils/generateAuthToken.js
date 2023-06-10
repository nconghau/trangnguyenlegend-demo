const jwt = require("jsonwebtoken");

const generateAuthToken = (user) => {
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign(
    {
      _id: user._id,
      phone: user.phone,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    jwtSecretKey
  );

  return token;
};

module.exports = generateAuthToken;
