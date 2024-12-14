const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('User Service connected to MongoDB'))
        .catch((err) => console.log(err));
}

module.exports = connectDB;