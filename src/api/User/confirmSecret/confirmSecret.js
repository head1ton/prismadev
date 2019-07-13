import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
    Mutation: {
        confirmSecret: async (_, args) => {
            const { email, secret } = args;
            const user = await prisma.user({ email });
            if (user.loginSecret === secret) {
                // JWT
                const confirmToken = generateToken(user.id);
                console.log(confirmToken);
                //return generateToken(user.id);
                return confirmToken
            } else {
                throw Error("Wrong email/secret combination");
            }
        }
    }
};
