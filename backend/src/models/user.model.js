import mongoose from "mongoose";
import bcrypt from "bcryptjs"; 

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    avatar:{
        type:String,
        requied:false,
        //add gravatar as default
    }
} ,{ timestamps: true });




userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    this.password =await bcrypt.hash(this.password, 10)

})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)

}

// userSchema.methods.toJSON = function() {
//     const obj = this.toObject();
//     delete obj.password;
//     delete obj.__v;
//     return obj;
// };

const User = mongoose.model("User", userSchema);

export default User;
