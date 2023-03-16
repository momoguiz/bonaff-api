const mongoose = require('mongoose')
require('dotenv').config()

try{
    mongoose.set("strictQuery", false);
    const url = process.env.MONGODB_URI
    mongoose.connect(url)
    console.log(`Connected to the BONAFF DB`)
}

catch(err){
    console.log(err)
}