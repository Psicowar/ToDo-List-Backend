const UserModel = require("../models/user.model")


const checkUser = async (req, res) => {
    const { name, email, picture, sub } = req.auth
    
    try {
        const user = await UserModel.findOne({ email })
        if (user) {
            return res.status(200).send({ message: "Exist", name, email, picture, user_id: sub })
        } else {
            const newUser = await UserModel.create({
                name,
                email,
                picture,
                user_id: sub
            })
            res.status(201).send({ data: newUser })
        }

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}


module.exports = {
    checkUser
} 
