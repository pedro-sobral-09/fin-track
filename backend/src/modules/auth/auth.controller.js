export default function createAuthController(authService){
    async function register(req, res) {
        const userData = req.body;

        if (!userData.email || !userData.password || !userData.name) {
            return res.status(400).json({ message: 'Email, password, and name are required' });  // 400: Bad Request
        }

        try {
            const token = await authService.register(userData);
            return res.status(201).json({ message: 'User registered successfully', token });  // 201: Created
        } catch (error) {
            if (error.message === 'User already exists') {
                return res.status(409).json({ message: 'User already exists' });  // 409: Conflict
            }

            return res.status(500).json({ message: 'Error registering user', error: error.message }); // 500: Internal Server Error
        }
    }

    async function login(req, res) {
        const userData = req.body;
        
        if (!userData.email || !userData.password) {
            return res.status(400).json({ message: 'Email and password are required' });  // 400: Bad Request
        }

        try {
            const token = await authService.login(userData);
            return res.status(201).json({ token });
        } catch (error) {
            return res.status(500).json({ message: 'Error logging in', error: error.message }); // 500: Internal Server Error
        }
    }

    return {
        register,
        login
    }
}