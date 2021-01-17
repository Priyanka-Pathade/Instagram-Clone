const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        default:"https://res.cloudinary.com/dnkitfzzp/image/upload/v1597513162/User_profile_icon_yzguuy.jpg"
    },
    followers:[{
        type:ObjectId,
        ref:"User"
    }],
    following:[{
        type:ObjectId,
        ref:"User"
    }]
})

mongoose.model("User",userschema)