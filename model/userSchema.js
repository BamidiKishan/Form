const mongoose = require("mongoose");

const useSchema = new mongoose.Schema ({
    username:{
        type:String,
        require: true,
        min:3,
        max:20
    },
    email:{
        type:String,
        require:true,
        max: 50,
        unique:true
    },
    number:{
        type:String,
        require:true,
        min:10,
        max:10
    },
    password:{
        type:String,
        require:true,
        min: 6
    },
    gender:{
        type:String,
        require:true
    },
},
{timestamps:true}
)

module.exports = new mongoose.model('berhampur', useSchema);