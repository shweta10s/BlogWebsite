const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    username: String,
    password: String
})

userSchema.plugin(plm)

module.exports = mongoose.model("user", userSchema);