import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/libs/mongodb";

// Definir las URLs de callback según el entorno
const googleCallbackURL = process.env.NODE_ENV === 'production'
    ? 'https://tu-app.vercel.app/api/auth/callback/google'
    : 'http://localhost:3000/api/auth/callback/google';

const githubCallbackURL = process.env.NODE_ENV === 'production'
    ? 'https://tu-app.vercel.app/api/auth/callback/github'
    : 'http://localhost:3000/api/auth/callback/github';

export const authOptions = {
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            authorization: {
                params: {
                    redirect_uri: githubCallbackURL,
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    redirect_uri: googleCallbackURL,
                }
            }
        }),
    ],
    debug: true,
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error',
        verifyRequest: '/auth/verify-request',
        newUser: "/auth/new-user",
    },
};

export default NextAuth(authOptions);
