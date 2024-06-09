const mongoose = require("mongoose")


const userSchema = mongoose.Schema({

    
    email :{
        type: "string",
        unique: true,
        required: true

    },
    password :{
        type: "string",
        required: true
    }


})

module.exports = mongoose.model("User", userSchema);