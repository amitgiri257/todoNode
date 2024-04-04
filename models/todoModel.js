const mongoose = require("mongoose")
const Schema=mongoose.Schema;

const todoModel = new Schema({
todo:{
    type:String,
    required:true
},
username:{
  type:String,
  required:true
},

})

module.exports = mongoose.model("todo",todoModel)