const userRoutes = require("express").Router()
const { checkUser } = require("../controllers/user.controller")
const { checkJwt } = require("../middleware/auth.middleware")

userRoutes
    .post("/check", checkJwt, checkUser)

module.exports = userRoutes