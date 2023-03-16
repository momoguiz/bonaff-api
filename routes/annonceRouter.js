const express = require('express')
const annonceRouter = express.Router()
const {upload}=require('../middlewares/multer')
const verifyAdmin=require('../middlewares/verifyAdmin')
const verify =require('../middlewares/verify')
const {getImagesFile, getImages, getAllAnnonce, postAnnonce, findAnnonceById,deleteAnnonceById, putAnnonceByid,getCurrentUserAnnonces,putCurrentUserAnnonce,deleteCurrentUserAnnonce} = require('../controllers/annonceController')


//routes for admin 
annonceRouter.route('/annonces/:id').put(verifyAdmin,putAnnonceByid)
annonceRouter.route('/annonces/:id').delete(verifyAdmin,deleteAnnonceById)

//routes for user(current user)
annonceRouter.route('/annonces/:id').get(verify,getCurrentUserAnnonces)
annonceRouter.route('/annonces/').post(verify,upload.single('image'),postAnnonce)
annonceRouter.route('/annonces/:id').put(verify,putCurrentUserAnnonce)
annonceRouter.route('/annonces/:id').delete(verify,deleteCurrentUserAnnonce)

//routes for all
annonceRouter.route('/annonces').get(getAllAnnonce)
annonceRouter.route('/annonces/:id').get(findAnnonceById)

//image
annonceRouter.route('/public/images/:filename').get(getImagesFile)
annonceRouter.route('/public/images').get(getImages)

module.exports = annonceRouter