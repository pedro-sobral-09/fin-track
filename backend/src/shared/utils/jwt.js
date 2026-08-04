import jsonwebtoken from 'jsonwebtoken';

export default function generateToken(payload) {
    return jsonwebtoken.sign(payload, process.env.JWT_SECRET);
}