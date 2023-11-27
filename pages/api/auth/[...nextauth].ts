import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: '22321693426-p0f3rl9kg561lh5p73qeub9iomuqaoer.apps.googleusercontent.com',
            clientSecret: "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",
        }),
    ],
};
export default NextAuth(authOptions);

