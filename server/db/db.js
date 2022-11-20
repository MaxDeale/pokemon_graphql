const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect('mongodb+srv://max:max123@cluster0.eywdnbd.mongodb.net/?retryWrites=true&w=majority');

    console.log(`MongoDB Details: ${conn}`);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
