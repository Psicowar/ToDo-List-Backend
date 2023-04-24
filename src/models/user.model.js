const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    user_id: {
        type: String,
        require: [true, "Please provide an id"],
        unique: [true, "Exist"]
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    picture: {
        type: String,
    }
})

const UserModel = model("User", UserSchema)

module.exports = UserModel