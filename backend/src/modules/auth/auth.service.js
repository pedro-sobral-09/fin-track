import userRepository from '../user/user.repository.js';
import password  from '../../shared/utils/password.js';
import jwt from '../../shared/utils/jwt.js';

async function register(userData){
    // Check if the email already exists in the database
    const existingUser = await userRepository.getUserByEmail(userData.email);
    
    if (existingUser) {
        throw new Error('User already exists');
    }

    const hashedPassword = await password.hashPassword(userData.password);
    
    const user = await userRepository.createUser({
        ...userData,
        password: hashedPassword
    });
    
    return jwt.generateToken({ id: user.id, email: user.email });
}

async function login(userData) {
    const user = await userRepository.getUserByEmail(userData.email);

    if (!user || user.deleteAt){
        throw new Error('User not found');
    }

    const isMatch = await password.compare(userData.password, user.password);
    
    if (!isMatch) {
        throw new Error("Invalid email or password");
    }

    return jwt.generateToken({ id: user.id, email: user.email });
}
export default {
    register,
    login
}