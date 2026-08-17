import password from "../../shared/utils/password.js";

export default function createUserService(userRepository){
    async function getUserById(id){
        const { password, ...user } = await userRepository.getUserById(id);
        return user;
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

        const { password, ...user } = await userRepository.updateUser(id, userData);

        return user;
        
    }

    async function deleteUserData(id){
        await userRepository.deleteUser(id);
    }

    return {
        getUserById, 
        updateUserData,
        deleteUserData
    }
}