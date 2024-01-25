import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDb } from "./utils";
import { User } from "./models";
import bcryptjs from "bcryptjs"

const login = async (credentials: any) => {
    try {
        await connectToDb();

        const user = await User.findOne({ username: credentials.username });

        if (!user) {
            throw new Error('Wrong credentials');
        }

        const isPasswordCorrect = await bcryptjs.compare(credentials.password, user.password);

        if (!isPasswordCorrect) {
            throw new Error('Wrong credentials');
        }

        return user;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to login!');
    }
};

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials)
                    return user
                } catch (err) {
                    return null
                }
            }
        })
    ],
    secret: process.env.NEXT_PUBLIC_AUTH_URL,
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account?.provider === 'github') {
                connectToDb()

                try {

                    const user = await User.findOne({ email: profile?.email })

                    if (!user) {
                        const newUser = new User({
                            username: profile?.login,
                            email: profile?.email,
                            image: profile?.avatar_url,
                        })
                        await newUser.save()
                    }
                } catch (err) {
                    console.log(err)
                    return false
                }
            }
            return true;
        },
    },
});

