import mongoose from "mongoose";

const Userschema=new mongoose.Schema({
    name:{
        type:"String",
        required:[true,'name is required']
    },
    email:{
        type:"String",
        required:[true,'email is required'],
        unique:[true,'email is unique'],
    },
    password:{
        type:"String",
        required:[true,'password is required']
    }
})

export const Usermodel= mongoose.model('UserModel',Userschema)

export default Usermodel