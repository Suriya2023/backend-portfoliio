const mongoose = require('mongoose')

const connectDB = async () => {
    try {

        await mongoose.connect(process.env.BASE_URL)
        console.log("Databse Connect Successful")

    } catch (err) {
        console.error("Databasse Not Connected", err.message)
        process.exit(1)

    }
}

module.exports = connectDB