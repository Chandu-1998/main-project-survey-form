const jwt = require('jsonwebtoken')

module.exports = function(req,res,next){
    try{

        const token = req.headers.authorization;
        if(token){
          
            jwt.verify(token, secret, function(err, decoded) {
                if(err) {
                    console.log(err);
                   return res.status(403).json({
                    status: "Failed", 
                    message: "Token is not valid"
                    });
                }
                req.user = decoded.user;
                next();
              });
      
        }else {
            res.status(403).json({
                status: "Failed", 
                message: "User is not authenticated"
            })
        }
    }
    catch(err)
    {
        console.log(err)
        return res.status(500).send('Server Error')
    }
}