const mongoose=require ('mongoose')
const { isEmail } = require('validator');

const Schema =mongoose.Schema

const User =new Schema({
    nom: {
        type: String,
        minLength: 1,
        maxLength: 50,
      },
    prenom: {
        type: String,
        minLength: 1,
        maxLength: 50,
      },
    email: {
        type: String,
        required: true,
        validate: [isEmail],
      },
    password: {
      type:String,
      required:true,
    },
    telephone: {
        type: Number,
        minLength: 9,
        maxLength: 15,
        },
    isAdmin: { type :Boolean,
        default: false}
    
      }
)
module.exports = mongoose.model('User', User)