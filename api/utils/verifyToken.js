import jwt from "jsonwebtoken";


export const verifyToken = (req, res, next) => {
    const token = req.cookies.token
    
    if(!token) {
       return  res.status(401).json({message: 'Unauthorized!!'})
    }
   
    jwt.verify(token, 'secretkey', (err, user) => {
        if(err) {
           return res.status(401).json({message: 'Unauthorized!!'})
        }
        req.user = user
        next()
    })
}