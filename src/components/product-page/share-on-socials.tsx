import Image from "next/image"
import Link from "next/link"

export function ShareOnSocials() {
  return (
    <div className="mt-8 lg:-mt-20">
      <span className="text-lg font-montserrat text-gray01 opacity-80">
        Compartilhe
      </span>
      <ul className="flex items-center gap-4 mt-3">
        <li>
          <Link href={"/"}>
            <Image
              src={"/svg/logo-instagram.svg"}
              width={24}
              height={24}
              alt="Logo Instagram"
            />
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <Image
              src={"/svg/logo-facebook.svg"}
              width={14}
              height={25}
              alt="Logo Facebook"
            />
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <Image
              src={"/svg/logo-twitter.svg"}
              width={28}
              height={22}
              alt="Logo Twitter"
            />
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <Image
              src={"/svg/logo-youtube.svg"}
              width={29}
              height={20}
              alt="Logo YouTube"
            />
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <Image
              src={"/svg/logo-pinterest.svg"}
              width={22}
              height={25}
              alt="Logo Pinterest"
            />
          </Link>
        </li>
      </ul>
    </div>
  )
}
