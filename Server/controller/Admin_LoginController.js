exports.adminLogin = (req, res) => {
  const { email, password } = req.body;

  if (
    email === process.env.EMAIL &&
    password === process.env.PASSWORD
  ) {
    return res.json({
      success: true,
      message: "Admin Login Successful",
    });
  }

  res.status(401).json({
    success: false,
    message: "Invalid Email or Password",
  });
};
