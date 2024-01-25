"use server"

import { signIn, signOut } from "./auth"
import { User, Post } from "./models"
import { connectToDb } from "./utils"
import bcryptjs from "bcryptjs"
import { revalidatePath } from "next/cache";

export const addPost = async (prevState: any, formData: any) => {

    const { title, desc, slug, userId, img } = Object.fromEntries(formData);

    try {
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            img,
            slug,
            userId,
        });

        await newPost.save();
        console.log("saved to db");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

export const deletePost = async (formData: any) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();

        await Post.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

export const deleteUser = async (formData: any) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();

        await Post.deleteMany({ userId: id });
        await User.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

export const GithubLogin = async () => {
    await signIn("github")
}

export const LogoutGithub = async () => {
    await signOut()
}

export const register = async (prevState: any, formData: any) => {

    const { username, email, password, passwordRepeat, img } = Object.fromEntries(formData);

    if (password !== passwordRepeat) {
        return { error: "Passwords do not match !" }
    }

    try {
        await connectToDb();

        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return { error: "Username already exists !" }
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            passwordRepeat,
            img
        });

        await newUser.save();

        return { success: true, message: 'Registration successful', user: newUser };
    } catch (err) {
        console.error(err);
        return "An error occurred during registration";
    }
};

export const login = async (prevState: any, formData: any) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await connectToDb();

        await signIn("credentials", { username, password });
    } catch (err: any) {
        if (err.message.includes('CredentialsSignin')) {
            return { error: "Invalid username or password" };
        }
        throw err;
    }
};
