import jsonwebtoken from "jsonwebtoken";
import { request, response } from "express";

export function authenticate(req, res, next){
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
        req.user = payload; // Attach the payload to the request object for further use
        next(); // Proceed to the next middleware or route handler
    } catch (error){
        return res.status(401).json({ error: "Invalid token" }); // 401: Unauthorized
    }
    
}