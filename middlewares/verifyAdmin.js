const verify =require('../middlewares/verify')


const verifyAdmin = (req, res, next) => {
     
    verify(req, res, () => {
        const {user} =req.user
        console.log(user)
      if (user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not alowed to do that!");
      }
    });
  };


module.exports =verifyAdmin