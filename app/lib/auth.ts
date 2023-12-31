import NextAuth from "next-auth";
import prisma from '@/db'
import { User } from "next-auth";
import {compare} from "bcrypt";

type LoginFn = (username: string, password: string) => Promise<User>;
export const login: LoginFn = async (username,password) => {
    const user = await prisma.user.findFirst({
        where: {
            email: username,
        },
    });
    if (user && (await compare(password, user.password))) {
        user.password = ""
        return user;
    } else throw new Error("User not found")
}
export const authOptions = {


}