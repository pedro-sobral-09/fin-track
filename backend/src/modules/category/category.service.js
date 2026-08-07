import userRepository from "../user/user.repository.js";
import categoryRepository from "./category.repository.js";

async function getAllCategories(userId){
    const categories = await categoryRepository.getAllCategories(userId);
    return categories;
}

async function getCategoryById(id){
    const category = await categoryRepository.getCategoryById(id);
    return category;
}

async function createCategory(userId, categoryData) {
    const existingCategory = await categoryRepository.getCategoryByName(categoryData.name);

    if (existingCategory){
        throw new Error('Category with name already exists');
    }

    const category = {
        ...categoryData,
        userId: userId
    }

    return await categoryRepository.createCategory(category);
}

export default {
    getAllCategories,
    getCategoryById,
    createCategory,
}