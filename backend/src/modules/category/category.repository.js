export default function createCategoryRepository(prisma){
    async function getAllCategories(userId){
        const categories = await prisma.category.findMany({
            where: { userId }
        });
        return categories;
    }

    async function getCategoryById(id, userId){
        const category = await prisma.category.findUnique({
            where: { id, userId }
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
        const category = await prisma.category.findMany({
            where: { type, userId }
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

    async function updateCategory(id, categoryData, userId){
        const category = await prisma.category.update({
            where: { id , userId},
            data: categoryData
        });
        return category;
    }

    async function deleteCategory(id, userId) {
        await prisma.category.delete({
            where: { id, userId },
        });
    }

    return {
        getAllCategories,
        getCategoryById,
        getCategoryByName,
        getCategoriesByType,
        createCategory,
        createMany,
        updateCategory,
        deleteCategory
    }
}