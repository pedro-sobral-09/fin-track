export default function createUserRepository(prisma){
    async function getUserById(id){
        const user = await prisma.user.findUnique({
            where: { id }
        });
        return user;
    }

    async function getUserByEmail(email){
        const user = await prisma.user.findUnique({
            where: { email }
        });
        return user;
    }

    async function createUser(userData){
        const user = await prisma.user.create({
            data: userData
        });
        return user;
    }

    async function updateUser(id, userData){
        const user = await prisma.user.update({
            where: { id },
            data: userData
        });
        return user;
    }

    async function deleteUser(id) {
        await prisma.user.update({
            where: { id },
            data: { deleteAt: new Date() }
        });
    }

    return {
        getUserById,
        getUserByEmail,
        createUser,
        updateUser,
        deleteUser
    }
}