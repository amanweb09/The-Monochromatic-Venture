const mongoose = require('mongoose');
require('dotenv').config()

const compass = process.env.COMPASS_CONNECTION_STRING;

async function main() {
    try {
        await mongoose.connect(compass, (err, data) => {
            if (data) {
                console.log("Connected")
            }
            if (err) {
                console.log(err.message)
            }
        })
    } catch{err => {
        console.log(err)
    }}
}

main()

module.exports = main