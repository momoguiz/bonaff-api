const multer = require("multer");
const path=require('path')
const express=require('express')
const app=express()


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'public/images/');
    },
    filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() +  '.' + file.originalname.split('.').pop());
    }
  })

const upload = multer({ storage: storage });



module.exports={upload}