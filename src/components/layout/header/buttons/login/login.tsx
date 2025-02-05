import { auth, signOut } from "@/lib/auth"
import { LinkUser } from "./link-user"

export async function LogIn() {
  const session = await auth()

  const user = session ? `Olá, ${session.user?.name}` : "Entrar"

  const link = session ? "" : "/entrar"

  async function logOutAction() {
    "use server"

    await signOut()
  }

  return <LinkUser lougOut={logOutAction} link={link} user={user} isLoggedIn={!!session} />
}
