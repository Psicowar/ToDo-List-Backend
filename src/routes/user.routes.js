const userRouter = require("express").Router()
const { ifUserExist, getAllUsers } = require("../controllers/user.controller")


userRouter
    .get("/signup", ifUserExist)
    .post("/all,", getAllUsers)
    .post("check", )

module.exports = userRouter