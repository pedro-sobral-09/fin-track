import userRepository from '../user/user.repository.js';
import hashPassword  from '../../shared/utils/password.js';
import generateToken from '../../shared/utils/jwt.js';

async function register(userData){
    // Check if the email already exists in the database
    const existingUser = await userRepository.getUserByEmail(userData.email);
    
    if (existingUser) {
        throw new Error('User already exists');
    }

    const hashedPassword = await hashPassword(userData.password);
    
    const user = await userRepository.createUser({
        ...userData,
        password: hashedPassword
    });
    
    return generateToken({ id: user.id, email: user.email });
}

export default {
    register
}