import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : [true , "Please add the contact name"]
    },
    email : {
        type : String,
        required : [true , "Please add the email address"],
        unique : [true , "Email already exists"]
    },
    password : {
        type : String,
        required : [true , "Please add the password"]
    },
},
    {
        timestamps : true,
    },
)

export const User = mongoose.model("User" , userSchema)