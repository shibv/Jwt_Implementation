import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { db } from '../database/db.js'


export const register = (req, res) => {
    const sql = "INSERT INTO login (`name`,`email`, `password`) VALUES (?) "
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err) {
            res.status(500).json({message: err.message})
        }
        console.log(req.body.name, req.body.email, hash);
        const values = [
            req.body.name,
            req.body.email,
            hash
        ]
        db.query(sql, [values], (err, result) => {
            if(err) {
                res.status(500).json({message: err.message})
            }
            res.status(200).json({ message: 'Registration Successful'})
        })
        
    })
    
}

export const login = async(req, res) => {
   const sql = "SELECT * FROM login WHERE email = ?"

   db.query(sql, [req.body.email], (err, result) => {
       if(err) {
           res.status(500).json({message: err.message})
       }
       if(result.length > 0) {
           bcrypt.compare(req.body.password, result[0].password, (err, response) => {
               if(err) {
                   res.status(500).json({message: err.message})
               }
               if(response) {
                    console.log("Hello");
                   const name = result[0].name
                   const email = result[0].email
                   const token = jwt.sign({name, email}, 'secretkey', {expiresIn: '1d'})
                   res.cookie("token", token, {
                    httpOnly: true,
                  }).status(200).json({message: 'Login Successful'})
               } else {
                   res.status(401).json({message: 'Invalid credentials'})
               }
           })
       } else {
           res.status(401).json({message: 'Invalid credentials'})
       }
   })
   
}