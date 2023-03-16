const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.urlencoded({
    extended : true
}))

const Annonce=require('./models/annonce')
const path=require('path')
const cors = require('cors')
app.use(express.json())
app.use(cors())
require('dotenv').config()
require('./db/client')

const usersRouter = require('./routes/usersRouter')
const annonceRouter = require('./routes/annonceRouter')
const authRouter = require('./routes/AuthRouter')
const annonce = require('./models/annonce')



app.get('/', (req, res) => {
    res.send('Welcome to my Bonaff api').status(200)
})
app.use('/api', usersRouter)
app.use('/', annonceRouter)
app.use('/auth', authRouter )


 
app.use('/images', express.static('public/images'));

app.listen(process.env.PORT, () => {
    console.log(`Server BONAFF is running on port ${process.env.PORT}`)
})