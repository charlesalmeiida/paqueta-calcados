import { auth } from "@/lib/auth"
import { LinkUser } from "./link-user"

export async function LogIn() {
  const session = await auth()

  const user = session ? `Olá, ${session.user?.name}` : "Entrar"

  const link = session ? "/" : "/entrar"

  return <LinkUser link={link} user={user} />
}
