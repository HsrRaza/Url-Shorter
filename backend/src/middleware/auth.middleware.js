import { findUserById } from "../dao/user.dao.js";
import { verifyToken } from "../utils/helper.js";

export const authMiddleware = async(req, res, next) => {
 
    try {
        const token = req.cookies.accessToken;
        if(!token){
            return res.status(401).json({message:"Unauthorized"});
        }

        const decodedToken = verifyToken(token);
        const user = await findUserById(decodedToken);

        if(!user){
            return res.status(401).json({message:"Unauthorized"});
        }
        
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({message:"Unauthorized"});
    }

}