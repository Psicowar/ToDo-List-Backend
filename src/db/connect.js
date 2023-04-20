const mongoose = require("mongoose")
const config = require("../config/config")

function connectDb() {
    return mongoose.connect(config.db.uri)
}

    
module.exports = connectDb