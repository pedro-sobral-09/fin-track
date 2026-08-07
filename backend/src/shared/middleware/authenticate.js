import jwt from "../utils/jwt.js";
import userRepository from "../../modules/user/user.repository.js";

export async function authenticate(req, res, next){
    const authHeader = req.headers.authorization;

    if (!authHeader){
        return res.status(401).json({ error: "Authorization header missing" }); // 401: Unauthorized
    }
    
    const token = authHeader.split(" ")[1];

    if (!token){
        return res.status(401).json({ error: "Token missing" }); // 401: Unauthorized
    }

    try {
        const payload = jwt.validateToken(token);

        const user = await userRepository.getUserById(payload.id);

        // Checks if the user exists
        if(!user){
            return res.status(404).json({ error: "User not found" }); // 404: Not found
        }

        // Checks if the user hasn't been deleted
        if (user.deleteAt === null){
            req.user = payload; // Attach the payload to the request object for further use
            next(); // Proceed to the next middleware or route handler
        } else {
            return res.status(404).json({ error: "User not found" }); // 404: Not found
        }
    } catch (error){
        return res.status(401).json({ error: "Invalid token" }); // 401: Unauthorized
    }
    
}