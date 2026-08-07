import userRepository from "./user.repository.js";
import password from "../../shared/utils/password.js";

async function getUserById(id){
    const user = await userRepository.getUserById(id);
    return { id: user.id, email: user.email, name: user.name };
}

async function updateUserData(id, userData){
    if (userData.email){
        const existingUser = await userRepository.getUserByEmail(userData.email);

        if (existingUser) {
            throw new Error('User with email already exists');
        }
    }

    if (userData.password){
        userData.password = await password.hashPassword(userData.password);
    }

    const user = await userRepository.updateUser(id, userData);

    return { name: user.name, id: user.id, email: user.email };
    
}

async function deleteUserData(id){
    await userRepository.deleteUser(id);
}

export default {
    getUserById, 
    updateUserData,
    deleteUserData
}