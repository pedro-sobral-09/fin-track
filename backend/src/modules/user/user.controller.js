import userService from "./user.service.js";

async function getUserById(req, res) {
    const userData = req.user;

    try {
        const user = await userService.getUserById(userData.id);
        return res.status(200).json({ user });  // 200: OK
    } catch (error){
        return res.status(500).json({ message: 'Error registering user', error: error.message }); // 500: Internal Server Error
    }
}

async function updateUserData(req, res){
    const userId = req.user.id;
    const userData = req.body;
    
    if (userData.email || userData.password || userData.name) {
        
        try {
        const user = await userService.updateUserData(userId, userData);
        return res.status(200).json({ user });  // 200: OK
    } catch (error){
        return res.status(500).json({ message: 'Error registering user', error: error.message }); // 500: Internal Server Error
    }
    } else {
        return res.status(400).json({ message: 'Email, password, and name are required' });  // 400: Bad Request
    }
}

async function deleteUserData(req, res){
    const userId = req.user.id;

    try {
        await userService.deleteUserData(userId);
        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Error registering user', error: error.message }); // 500: Internal Server Error
    }
}

export default {
    getUserById, 
    updateUserData,
    deleteUserData
}