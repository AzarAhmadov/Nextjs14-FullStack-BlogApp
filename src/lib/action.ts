"use server"

import { signIn, signOut } from "./auth"

export const GithubLogin = async () => {
    await signIn("github")
}

export const LogoutGithub = async () => {
    await signOut()
}