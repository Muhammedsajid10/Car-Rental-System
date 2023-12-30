const userModel = require("./userRegSchmea");
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');


// registering new user
const tokenGeneration = (userId) => {
  try {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });
  } catch (error) {
    console.error(error);
    throw new Error('Error generating token.');
  }
};


const userRegistration = async (req, res) => {
  const { name, email, mobile, password, role } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.json({ message: 'User already exists.' });
    }

    const hashedPass = await argon2.hash(password);

    const newUser = await userModel.create({
      name,
      email,
      mobile,
      password: hashedPass,
      role
    });

    const token = tokenGeneration(newUser._id);

    res.json({
      message: 'successfully-Registered',
      name: newUser.name,
      email: newUser.email,
      mobile: newUser.mobile,
      role,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = { userRegistration, tokenGeneration };
