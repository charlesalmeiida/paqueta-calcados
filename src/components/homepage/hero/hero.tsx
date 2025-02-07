import { Button } from "@/components/button/button"
import Image from "next/image"
import iconsHero from "@/data/icons-hero.json"

export function Hero() {
  return (
    <main>
      <section className="bg-hero py-14 lg:py-32 bg-no-repeat bg-center bg-cover">
        <div className="flex justify-between container">
          <div className="hidden lg:block"></div>
          <div className="xl:-mr-10">
            <h1 className="text-gray01">Tênis Casual</h1>
            <h2 className="text-primary01 lg:-mt-8">Masculino</h2>
            <div className="mt-6">
              <span className="font-poppins text-2xl font-medium text-gray01 opacity-60">
                A partir de
              </span>
              <h3 className="text-gray01 -mt-3 mb-4">R$ 79,99</h3>
              <Button>Aproveite</Button>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-linear01 hidden lg:block py-16">
        <div className="container">
          <ul className="flex justify-between items-center">
            {iconsHero.map(({ icon, name, alt, width, height }, index) => (
              <li key={index} className="flex items-center gap-5">
                <Image src={icon} alt={alt} width={width} height={height} />
                <span
                  className={`text-light text-sm font-poppins block max-w-[165px]`}
                >
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
