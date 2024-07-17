const User = require("../models/user");
const {
  generateToken,
  hashPassword,
  comparePasswords,
} = require("../utils/auth");

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(200).json({ data : {message: "User already exists", error: true} });
    }

    const hashedPassword = await hashPassword(password);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      data: {
      _id: user._id,
      name: user.name,
      email: user.email,
      success: true
      }
    });
  } catch (err) {
    res.status(200).json({ data: { message: err.message , error: true} });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)
  try {
    const user = await User.findOne({ email });

    if (user && (await comparePasswords(password, user.password))) {
      res.json({
        data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        success: true
        }

      });
    } else {
      res.json({ data : { message: "Invalid email or password" , error: true}});
    }
  } catch (err) {
    res.json({ data: {message: err.message, error: true }});
  }
};
