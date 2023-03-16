const jwt = require('jsonwebtoken')


const verify = (req, res, next) => {
    //si token existe alors user connecté
    const token = req.header('auth-token')
    if(!token) return res.status(400).send('Access denied')

    try{
        //récupère user infos à partir de token  
        const currentUser = jwt.verify(token, process.env.SECRET)
        req.user = currentUser
        next()
    }

    catch(err){
        res.json(err)
    }
}

module.exports = verify