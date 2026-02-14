import { findUserById } from "../dao/user.dao";
import { verifyToken } from "../utils/helper";

export const authMiddleware = async(req, res, next) => {
 
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({message:"Unauthorized"});
        }

        const decodedToken = verifyToken(token);
        const user = await findUserById(decoded);

        if(!user){
            return res.status(401).json({message:"Unauthorized"});
        }
        
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({message:"Unauthorized"});
    }

}