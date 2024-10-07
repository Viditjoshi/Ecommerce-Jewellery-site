const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  // Options for the cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true, // Prevents client-side access to the cookie for security
    secure: process.env.NODE_ENV === "production", // Ensure the cookie is sent over HTTPS in production
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax", // Use "None" for cross-site in production, otherwise "Lax"
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
