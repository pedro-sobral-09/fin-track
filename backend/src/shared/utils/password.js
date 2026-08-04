import bcrypt from 'bcrypt';

export default function hashPassword(password) {
    return bcrypt.hash(password, 10); 
} 