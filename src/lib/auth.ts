import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Apple from "next-auth/providers/apple"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Apple],
})

export async function signInWithGoogle() {
  return signIn("google")
}

export async function signInWithApple() {
  return signIn("apple")
}
