export default {
    Mutation: {
        //createAccount: async (_, args, { prisma }) => {
        createAccount: async (_, args) => {
            //console.log(prisma);
            const {
                username,
                email,
                firstName = "",
                lastName = "",
                bio = ""
            } = args;
            const user = await prisma.createUser({
                username,
                email,
                firstName,
                lastName,
                bio
            });
            return user;
        }
    }
};
