const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        require: [true, "Please provide a name"]
    },
    password: {
        type: String,
        require: [true, "Please provide a password"]
    },
    email: {
        type: String,
        require: [true, "Please provide a email"]
    },
    user_todos: [
        {
            type: Schema.Types.ObjectId,
            ref: "Todo"
        }

    ]
})

const UserModel = model("User", UserSchema)

module.exports = UserModel