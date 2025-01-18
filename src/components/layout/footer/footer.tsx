import footerNav from "@/data/footer-nav.json"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16">
      <div className="container">
        <div className="flex gap-6 items-start">
          <div className="space-y-3">
            <h6 className="text-lg font-bold text-gray01">
              {footerNav[0].title}
            </h6>
            <ul className="space-y-3">
              {footerNav[0].links?.map((link, index) => (
                <li
                  key={index}
                  className="text-sm font-montserrat text-gray01 opacity-60 hover:opacity-90"
                >
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h6 className="text-lg font-bold text-gray01">
              {footerNav[1].title}
            </h6>
            <ul className="space-y-3">
              {footerNav[1].links?.map((link, index) => (
                <li
                  key={index}
                  className="text-sm font-montserrat text-gray01 opacity-60 hover:opacity-90"
                >
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-9">
            <div className="space-y-3">
              <h6 className="text-lg font-bold text-gray01">
                {footerNav[2].title}
              </h6>
              <ul className="space-y-3">
                {footerNav[2].links?.map((link, index) => (
                  <li
                    key={index}
                    className="text-sm font-montserrat text-gray01 opacity-60 hover:opacity-90"
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h6 className="text-lg font-bold text-gray01">
                {footerNav[3].title}
              </h6>
              <ul className="space-y-3">
                <li className="text-sm font-montserrat text-gray01 opacity-60 hover:opacity-90 max-w-72">
                  {footerNav[3].adress}
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h6 className="text-lg font-bold text-gray01">
                {footerNav[4].title}
              </h6>
              <ul className="space-y-3">
                {footerNav[4].links?.map((link, index) => (
                  <li
                    key={index}
                    className="text-sm font-montserrat text-gray01 opacity-60 hover:opacity-90"
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-12">
            <div className="space-y-3">
              <h6 className="text-lg font-bold text-gray01">
                {footerNav[5].title}
              </h6>
              <ul className="grid grid-cols-3 gap-6 items-center justify-center">
                {footerNav[5].logos?.map(({ logo, width, height }, index) => (
                  <li key={index}>
                    <Image
                      src={logo}
                      width={width}
                      height={height}
                      alt="Logo de Formas de Pagamento"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h6 className="text-lg font-bold text-gray01">
                {footerNav[6].title}
              </h6>
              <ul className="flex items-center gap-4">
                {footerNav[6].redes?.map(
                  ({ logo, width, height, name }, index) => (
                    <li key={index}>
                      <Link href={"/"}>
                        <Image
                          src={logo}
                          width={width}
                          height={height}
                          alt={`Logo do ${name}`}
                        />
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
