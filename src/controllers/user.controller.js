const UserModel = require("../models/user.model")

const ifUserExist = async (req, res) => {
    const { name, password, email } = req.body
    try {
        const user = await UserModel.find({ email })
        if (user) {
            res.status(200).send({ message: "User exist", id: user._id })
        }
        const newUser = await UserModel.crate({ name, password, email })
        res.status(201).send({ data: newUser })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }

}

const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find({})
        res.status(200).send({ data: users })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

module.exports = {
    ifUserExist, getAllUsers
}