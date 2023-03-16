const Annonce = require('../models/annonce')
const path = require('path')
const fs = require('fs')

const putAnnonceByid = async (req, res) => {
    try {
        const oneAnnonce = await Annonce.findById(req.params.id)
        await oneAnnonce.updateOne({ $set: req.body })
        await Annonce.findById(req.params.id)
        res.status(200).json(oneAnnonce)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const deleteAnnonceById = async (req, res) => {
    try {
        const oneAnnonce = await Annonce.deleteOne({ _id: req.params.id })
        res.status(200).json(oneAnnonce)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const getCurrentUserAnnonces = async (req, res) => {
    try {
        const allAnnonces = await Annonce.findById(req.user._id)
        res.status(200).json(allAnnonces)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const postAnnonce = async (req, res) => {
    try {
        console.log(req.file.filename)
        const newAnnonce = new Annonce({
            titre: req.body.titre,
            categorie: req.body.categorie,
            description: req.body.description,
            prix: req.body.prix,
            image: '/public/images/' + req.file.filename,
            annonce: req.body.annonce,
            createur: req.body.createur,
            region: req.body.region,
            ville: req.body.ville,
            
        });
        newAnnonce.save()
        res.status(201).json(newAnnonce)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }

}

const putCurrentUserAnnonce = async (req, res) => {
    try {
        const oneAnnonce = await Annonce.findById(req.user._id)
        await oneAnnonce.updateOne({ $set: req.body })
        await Annonce.findById(req.user._id)
        res.status(200).json(oneAnnonce)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const deleteCurrentUserAnnonce = async (req, res) => {
    try {
        const oneAnnonce = await Annonce.deleteOne({ _id: req.user._id })
        res.status(200).json(oneAnnonce)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const getAllAnnonce = async (req, res) => {
    try {
        const annonces = await Annonce.find()
        res.status(200).json(annonces)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const findAnnonceById = async (req, res) => {
    try {
        const oneAnnonce = await Annonce.findById(req.params.id)
        res.status(200).json(oneAnnonce)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}


const getImagesFile = (req, res) => {
    const file = `public/images/${req.params.filename}`;
    res.sendFile(path.resolve(file));
};

const getImages = (req, res) => {
    fs.readdir('public/images', (err, files) => {
        if (err) {
            return res.status(500).send({ error: err });
        }
        res.send({ images: files });
    });
};


module.exports = { getImages, getImagesFile, getAllAnnonce, postAnnonce, findAnnonceById, putAnnonceByid, deleteAnnonceById, getCurrentUserAnnonces, putCurrentUserAnnonce, deleteCurrentUserAnnonce }