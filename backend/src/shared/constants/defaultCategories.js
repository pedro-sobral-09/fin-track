const categories = [
    // Income
    { name: 'Salary', type: 'INCOME' },
    { name: 'Freelance', type: 'INCOME' },
    { name: 'Investments', type: 'INCOME' },
    { name: 'Sales', type: 'INCOME' },
    { name: 'Other', type: 'INCOME' },

    // Expenses
    { name: 'Food', type: 'EXPENSE' },
    { name: 'Housing', type: 'EXPENSE' },
    { name: 'Transportation', type: 'EXPENSE' },
    { name: 'Healthcare', type: 'EXPENSE' },
    { name: 'Education', type: 'EXPENSE' },
    { name: 'Entertainment', type: 'EXPENSE' },
    { name: 'Shopping', type: 'EXPENSE' },
    { name: 'Financial', type: 'EXPENSE' },
    { name: 'Other', type: 'EXPENSE' }
];

export async function createDefaultCategories(categoryRepository, user){
    const newCategories = categories.map((category) => {
        return {
            ...category,
            userId: user.id
        }
    });

    await categoryRepository.createMany(newCategories);
} 
    
    

