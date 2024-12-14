const User = require("../model/user.models");

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const newUser = new User({ name, email, password });
        await newUser.save();

        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);
        res.cookie('token', token);
        res.status(201).json({ message: "User created successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { register };
