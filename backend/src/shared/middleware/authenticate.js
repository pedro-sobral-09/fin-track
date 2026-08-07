import jsonwebtoken from "jsonwebtoken";
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
        const payload = jsonwebtoken.verify(token, process.env.JWT_SECRET);

        const user = await userRepository.getUserById(payload.id);

        if(!user){
            return res.status(400).json({ error: "User not found" }); // Bad request
        }

        req.user = payload; // Attach the payload to the request object for further use
        next(); // Proceed to the next middleware or route handler
    } catch (error){
        return res.status(401).json({ error: "Invalid token" }); // 401: Unauthorized
    }
    
}