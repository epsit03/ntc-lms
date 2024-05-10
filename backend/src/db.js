// const { connect } = require("mongoose")

// const connectDb = async () => {
//   return connect(process.env.DB_URI, { dbName: process.env.DB_NAME })
// }
const mongoose = require("mongoose");
 const connectDb = mongoose.connect("mongodb+srv://omjidwivedi49:Omji%40123@cluster0.vdeaofl.mongodb.net/NTC-LMS?retryWrites=true&w=majority&appName=Cluster0")

module.exports = { connectDb }
