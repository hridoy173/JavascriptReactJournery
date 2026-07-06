const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    age:{
        type:Number,
        required:true,
        min:2
    },

    password:{
        type:String,
        required:true,
        minlength:6
    }
},
{
    timestamps:true
});


// pre save hook to hash password before saving to database
userSchema.pre("save", async function(next){


    // check if password is modified or not
    if(!this.isModified("password")){
        return next();
    }

    this.password = await bcrypt.hash(this.password,10);

    next();

});

module.exports = mongoose.model("User",userSchema);