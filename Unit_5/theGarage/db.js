/* 
    What is needed:
        - mongoose for connecting everything together
        - connection string and collection name

    - Logic built to connect to DB
    - Export functionality so that it is accessible to the rest of server (index.js)
*/

require('dotenv').config();
const connection = process.env.DBURL;
const collection = process.env.COLL;
const mongoose = require("mongoose");

const db = async () => {
    try {
        await mongoose.connect(`${connection}/${collection}`, {
            // mongoose dependencies warnings to remove
            // useNewUrlParser: false,
            // useUnifiedTopology: true
        });

        console.log(`DB Connected to: ${connection}/${collection}`);

    } catch (err) {
        throw new Error(`DB Connection Error: ${err.message}`);
    }
}

module.exports = { db };