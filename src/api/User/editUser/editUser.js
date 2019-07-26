import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        editUser: async (_, args, { request, isAuthenticated }) => {
            isAuthenticated(request);
            const { username, email, firstName, lastName, bio, avatar } = args;
            const { user } = request;
            return prisma.updateUser({
                where: { id: user.id },
                data: { username, email, firstName, lastName, bio, avatar }
            });
            // OR (await 를 안해줘도 되는 건 return이 마지막 statement이기 때문에 :
            // 서버가 자동으로 이 promise가 resolve되서 서버에 결과를 전달하길 기다려주기 때문에)
            // const user = await prisma.updateUser({
            //     where: { id: user.id },
            //     data: { username, email, firstName, lastName, bio }
            // });
            // return user;
        }
    }
};
