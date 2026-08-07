import { prisma } from "../../shared/lib/prisma.js";

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

async function getCategoriesByType(type){
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
    const user = await prisma.user.update({
        where: { id },
        data: categoryData
    });
    return user;
}

async function deleteCategory(id) {
    await prisma.category.delete({
        where: { id },
    });
}

export default {
    getCategoryById,
    getCategoryByName,
    getCategoriesByType,
    createCategory,
    updateCategory,
    deleteCategory
}