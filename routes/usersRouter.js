const express = require('express')
const usersRouter = express.Router()
const verify =require('../middlewares/verify')
const verifyAdmin=require('../middlewares/verifyAdmin')
const {getAllUsers,findUserById,deleteUserById, putUserById,findCurrentUser, putCurrentUser, deleteCurrentUser} = require('../controllers/userController')

//routes for admin 
usersRouter.route('/users').get(verifyAdmin,getAllUsers)
usersRouter.route('/users/:id').get(verifyAdmin,findUserById)
usersRouter.route('/users/:id').put(verifyAdmin,putUserById)
usersRouter.route('/users/:id').delete(verifyAdmin,deleteUserById)

//routes for current user 
usersRouter.route('/currentUser').get(verify,findCurrentUser)
usersRouter.route('/currentUser').put(verify,putCurrentUser)
usersRouter.route('/currentUser').delete(verify,deleteCurrentUser)

module.exports = usersRouter