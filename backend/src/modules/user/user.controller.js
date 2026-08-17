export default function createUserController(userService){
    async function getUserById(req, res) {
        const userData = req.user;

        try {
            const user = await userService.getUserById(userData.id);
            return res.status(200).json({ user });  // 200: OK
        } catch (error){
            return res.status(500).json({ message: 'Error registering user', error: error.message }); // 500: Internal Server Error
        }
    }

    async function updateUser(req, res){
        const userId = req.user.id;
        const userData = req.body;
        
        if (userData.email || userData.password || userData.name) {
            
            try {
            const user = await userService.updateUser(userId, userData);
            return res.status(200).json({ user });  // 200: OK
        } catch (error){
            return res.status(500).json({ message: 'Error registering user', error: error.message }); // 500: Internal Server Error
        }
        } else {
            return res.status(400).json({ message: 'Email, password, and name are required' });  // 400: Bad Request
        }
    }

    async function deleteUser(req, res){
        const userId = req.user.id;

        try {
            await userService.deleteUser(userId);
            return res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Error registering user', error: error.message }); // 500: Internal Server Error
        }
    }

    return {
        getUserById, 
        updateUser,
        deleteUser
    }
}
