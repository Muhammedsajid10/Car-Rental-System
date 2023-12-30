const { tokenGeneration } = require("./userReg");
const userModel = require("./userRegSchmea");
const argon2 = require('argon2')

const userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(500).json("user doesn't exist");
        }

        const isPassword = await argon2.verify(user.password, password);
        if (!isPassword) {
            return res.status(401).json("user doesn't exist");
        }

        const token = tokenGeneration(user._id);
        res.json({
            message: 'Login Successful',
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            role: user.role = 'user',
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error");
    }
}

module.exports = userLogin;
