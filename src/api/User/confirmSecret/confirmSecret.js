import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
    Mutation: {
        confirmSecret: async (_, args) => {
            const { email, secret } = args;
            const user = await prisma.user({ email });
            if (user.loginSecret === secret) {
                // JWT
                // 복사가 안되서 일단 추출해서 복사
                // const confirmToken = generateToken(user.id);
                // console.log(confirmToken);
                // return confirmToken
                //grahpql에 {"Authorization": "Bearer token키값"} 으로 인증해서 처리함. HTTP HEADERS에 넣고 진행;ß
                await prisma.updateUser({
                    where: { id: user.id },
                    data: {
                        loginSecret: ""
                    }
                });
                return generateToken(user.id);
            } else {
                throw Error("Wrong email/secret combination");
            }
        }
    }
};
