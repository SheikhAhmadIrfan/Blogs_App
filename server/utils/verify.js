import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config();

export const verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token;
    if(!token){
        return res.status(401).json({ msg: "token is missing" });
    }

    jwt.verify(token,process.env.JWT,(error,user)=>{
        if(error) 
        {
            return res.status(403).json({ msg: "invalid token" });
        }
        req.user=user; //information
        next();
    });
};