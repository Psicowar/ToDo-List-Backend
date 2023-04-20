const dotenv = require('dotenv')

if (process.env.NODE_ENV === "production") {
    dotenv.config({ path: ".env.production" })
} else {
    dotenv.config({ path: ".env.development" })
}

const ENV = process.env.NODE_ENV || "development"

const CONFIG = {
    development: {
        app: {
            PORT: process.env.PORT || 4006
        },
        db: {
            uri: process.env.MONGODB_URI
        }
    },
    production: {}

}

module.exports = CONFIG[ENV]