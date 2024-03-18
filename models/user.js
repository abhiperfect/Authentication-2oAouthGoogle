// models/user.js
import { Sequelize, DataTypes } from 'sequelize';
import env from "dotenv";
env.config();

const sequelize = new Sequelize('postgres://postgres:superuserPG@localhost:5432/secret');

const User = sequelize.define('User', {
    googleId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    // Other fields can be added here, such as username, email, etc.
});

// Create the table if it doesn't exist
(async () => {
    await User.sync();
})();

module.exports = User;
