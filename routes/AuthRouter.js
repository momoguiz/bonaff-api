const express = require('express')
const authRouter = express.Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
authRouter.use(express.json())



authRouter.post('/register', async (req, res ) => {

    // vérifier si l'e-mail existe déjà dans ma base de données
    const emailExist = await User.findOne({email : req.body.email})
    if(emailExist) return res.status(400).send('Email already taken')

    // encrypt le password
    const salt = await bcrypt.genSalt(10) // salt add a unique value to the password to increase the encryption
    const hashPassword = await bcrypt.hash(req.body.password, salt) // hash the passord of the user, adding the salt


    //create the user with info provided
    const user = new User({
        nom : req.body.nom,
        prenom:req.body.prenom,
        email : req.body.email,
        //password:req.body.password,
        password : hashPassword,
        telephone:req.body.telephone,
        isAdmin: req.body.isAdmin
    })

    user.save()
    res.send(`Welcome ${user.nom}`)
})


authRouter.post('/login', async (req, res) => {

    // we check if there is an email which match the email provided by the user
    const user = await User.findOne({email : req.body.email})
    if(!user) return res.status(400).send('Email not found, please register')

    // we compare the password we have in our db with the end send by the user(req.body.passord)
    const validPass = await bcrypt.compare(req.body.password, user.password)  
    if(!validPass) return res.status(400).send('Password is not valid, please try again')

    const token = jwt.sign({user}, process.env.SECRET)
    res.header('auth-token', token)
    res.json(token)


})

module.exports = authRouter