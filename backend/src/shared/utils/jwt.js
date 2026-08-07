import jsonwebtoken from 'jsonwebtoken';

function generateToken(payload) {
    return jsonwebtoken.sign(payload, process.env.JWT_SECRET);
}

function validateToken(token){
    return jsonwebtoken.verify(token, process.env.JWT_SECRET)
}

export default {
    generateToken,
    validateToken
}
