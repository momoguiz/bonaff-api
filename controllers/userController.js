const User = require('../models/user')


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const findUserById = async (req, res) => {
    try {
        const oneUser = await User.findById(req.params.id)
        res.status(200).json(oneUser)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const putUserById = async (req, res) => {
    try {
        const oneUser = await User.findById(req.params.id)
        await oneUser.updateOne({ $set: req.body })
        await User.findById(req.params.id)
        res.status(200).json(oneUser)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const deleteUserById = async (req, res) => {
    try {
        const oneUser = await User.deleteOne({ _id: req.params.id })
        res.status(200).json(oneUser)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const findCurrentUser = async (req, res) => {
    try {
        const {user} = req.user
        const myUser = await User.findOne({_id:user._id})
        
        res.status(200).json(myUser)

    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const putCurrentUser = async (req, res) => {
    try {
        const {user} = req.user
        const myUser = await User.findById(user._id)
        await myUser.updateOne({ $set: req.body })
        await User.findById(req.user._id)
        res.status(200).json(myUser)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const deleteCurrentUser = async (req, res) => {
    try {
        const {user} = req.user
        const oneUser = await User.deleteOne({ _id: user._id })
        res.status(200).json(oneUser)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}


module.exports = { getAllUsers, findUserById, putUserById, deleteUserById,findCurrentUser,putCurrentUser,deleteCurrentUser }