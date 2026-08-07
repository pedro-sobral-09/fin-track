import { prisma } from "../../shared/lib/prisma.js";

async function getAllCategories(userId){
    const categories = await prisma.category.findMany({
        where: { userId }
    });
    return categories;
}

async function getCategoryById(id){
    const category = await prisma.category.findUnique({
        where: { id }
    });
    return category;
}

async function getCategoryByName(name, userId) {
    const category = await prisma.category.findFirst({
        where: { name, userId },
    });
    return category;
}

async function getCategoriesByType(type, userId){
    const category = await prisma.user.findMany({
        where: { type }
    });
    return category;
}

async function createCategory(categoryData){
    const category = await prisma.category.create({
        data: categoryData
    });
    return category;
}

async function createMany(categoriesData) {
    const categories = await prisma.category.createMany({
        data: categoriesData
    });
    return categories;
}

async function updateCategory(id, categoryData){
    const category = await prisma.category.update({
        where: { id },
        data: categoryData
    });
    return category;
}

async function deleteCategory(id) {
    await prisma.category.delete({
        where: { id },
    });
}

export default {
    getAllCategories,
    getCategoryById,
    getCategoryByName,
    getCategoriesByType,
    createCategory,
    createMany,
    updateCategory,
    deleteCategory
}