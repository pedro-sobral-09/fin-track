export default function createCategoryService(userRepository, categoryRepository){
    async function getAllCategories(userId){
        const categories = await categoryRepository.getAllCategories(userId);
        return categories;
    }

    async function getCategoryById(id, userId){
        const category = await categoryRepository.getCategoryById(id, userId);
        return category;
    }

    async function createCategory(userId, categoryData) {
        const existingCategory = await categoryRepository.getCategoryByName(categoryData.name, userId);

        if (existingCategory){
            throw new Error('Category with name already exists');
        }

        const category = {
            ...categoryData,
            userId: userId
        }

        return await categoryRepository.createCategory(category);
    }

    async function updateCategory(id, categoryData, userId) {
        const existingCategory = await categoryRepository.getCategoryByName(categoryData.name, userId);

        if (existingCategory){
            throw new Error('Category with name already exists');
        }

        const category = await categoryRepository.updateCategory(id, categoryData, userId);
        return category;
    }

    async function deleteCategory(id, userId){
        await categoryRepository.deleteCategory(id, userId);
    }

    return {
        getAllCategories,
        getCategoryById,
        createCategory,
        updateCategory,
        deleteCategory
    }
}