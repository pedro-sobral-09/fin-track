export default function createCategoryController(categoryService){
    async function getAllCategories(req, res){
        const userId = req.user.id;

        try {
            const categories = await categoryService.getAllCategories(userId);
            return res.status(200).json({ categories });
        } catch (error){
            return res.status(500).json({ message: 'Error registering user', error: error.message }); // 500: Internal Server Error
        }
    }

    async function getCategoryById(req, res) {
        const categoryData = req.params;
        const userId = req.user.id;

        try {
            const category = await categoryService.getCategoryById(categoryData.id, userId);
            return res.status(200).json({ category });  // 200: OK
        } catch (error){
            return res.status(500).json({ message: 'Error registering user', error: error.message }); // 500: Internal Server Error
        }
    }

    async function createCategory(req, res){
        const userId = req.user.id;
        const categoryData = req.body;

        if (!categoryData.name || !categoryData.type){
            return res.status(400).json({ message: 'Name and Type are required' });  // 400: Bad Request
        }

        try {
            const category = await categoryService.createCategory(userId, categoryData);
            return res.status(201).json({ category });  // 200: Created
        } catch (error){
            return res.status(500).json({ message: 'Error registering user', error: error.message }); // 500: Internal Server Error
        }
    }

    async function updateCategory(req, res){
        const categoryId = req.params.id;
        const categoryData = req.body;
        const userId = req.user.id;

        if (categoryData.name || categoryData.type){
            try {
                const category = await categoryService.updateCategory(categoryId, categoryData, userId);
                return res.status(200).json({ category }); // 200: OK
            } catch (error){
                return res.status(500).json({ message: 'Error registering user', error: error.message }); // 500: Internal Server Error
            }
        } else {
            return res.status(400) // Bad request 
        }
    }

    async function deleteCategory(req, res) {
        const categoryId = req.params.id;
        const userId = req.user.id;

        try {
            await categoryService.deleteCategory(categoryId, userId);
            return res.status(200).json({ message: "Category deleted sucefully" });
        } catch (error){
            return res.status(500).json({ message: 'Error registering user', error: error.message }); // 500: Internal Server Error
        }
    }

    return {
        getAllCategories,
        getCategoryById,
        createCategory,
        updateCategory,
        deleteCategory,
    }
}